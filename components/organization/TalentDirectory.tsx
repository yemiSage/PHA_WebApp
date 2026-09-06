"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

type Talent = {
  id: number;
  name: string;
  role: string;
  location: string;
  level: string;
};
export function TalentDirectory({ talents }: { talents: Talent[] }) {
  const [filters, setFilters] = useState({
    query: "",
    role: "",
    level: "",
    country: "",
  });
  const [limit, setLimit] = useState(12);
  const [selected, setSelected] = useState<Talent | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const results = talents.filter(
    (talent) =>
      `${talent.name} ${talent.role}`
        .toLowerCase()
        .includes(filters.query.toLowerCase()) &&
      (!filters.role || talent.role === filters.role) &&
      (!filters.level || talent.level === filters.level) &&
      (!filters.country || talent.location.endsWith(filters.country)),
  );
  return (
    <section className="talent-directory" id="directory">
      <form
        className="talent-filters"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          setFilters({
            query: String(data.get("query") || ""),
            role: String(data.get("role") || ""),
            level: String(data.get("level") || ""),
            country: String(data.get("country") || ""),
          });
          setLimit(12);
        }}
      >
        <input
          name="query"
          aria-label="Search role or name"
          placeholder="Search role or name…"
        />
        {[
          ["role", "Role", [...new Set(talents.map((t) => t.role))]],
          ["level", "Level", [...new Set(talents.map((t) => t.level))]],
          [
            "country",
            "Country",
            [...new Set(talents.map((t) => t.location.split(", ").at(-1)!))],
          ],
        ].map(([key, label, options]) => (
          <select
            name={key as string}
            aria-label={label as string}
            key={key as string}
          >
            <option value="">All {label as string}s</option>
            {(options as string[]).map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        ))}
        <button type="submit">Search</button>
      </form>
      <p className="talent-results" role="status">
        Sample directory · {results.length} matching {results.length === 1 ? "profile" : "profiles"}
      </p>
      <div className="talent-profile-grid">
        {results.slice(0, limit).map((talent) => (
          <article className="talent-profile-card" key={talent.id}>
            <span>{talent.level}</span>
            <div className="talent-profile-card__identity">
              <div>
                <h3>{talent.name}</h3>
                <p>{talent.role}</p>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setSelected(talent);
                  dialog.current?.showModal();
                }}
              >
                View profile
              </button>
              <small>{talent.location}</small>
            </div>
          </article>
        ))}
      </div>
      {results.length === 0 ? (
        <p className="talent-empty">
          No talents match your search. Try another role, country, or name.
        </p>
      ) : null}
      {limit < results.length ? (
        <button
          className="talent-view-more"
          type="button"
          onClick={() => setLimit((n) => n + 6)}
        >
          View more <span aria-hidden="true">⌄</span>
        </button>
      ) : null}
      <dialog className="talent-dialog" ref={dialog}>
        <button
          type="button"
          className="talent-dialog__close"
          onClick={() => dialog.current?.close()}
          aria-label="Close profile"
        >
          ×
        </button>
        {selected ? (
          <>
            <span className="org-eyebrow">{selected.level}</span>
            <h2>{selected.name}</h2>
            <p>{selected.role}</p>
            <p>{selected.location}</p>
            <p>This is a sample profile. Contact PHA for current talent availability.</p>
            <Button href="/contact" arrow>
              Enquire about this talent
            </Button>
          </>
        ) : null}
      </dialog>
    </section>
  );
}
