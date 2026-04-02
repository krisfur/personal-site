import Image from "next/image";
import type { ReactNode } from "react";

interface ContactLink {
  label: string;
  url: string;
  icon: ReactNode;
}

interface ProfileCardProps {
  photoUrl: string;
  avatarUrl: string;
  name: string;
  title: string;
  summary: string;
  note?: string;
  contactLinks: ContactLink[];
}

export default function ProfileCard({
  photoUrl,
  avatarUrl,
  name,
  title,
  summary,
  note,
  contactLinks,
}: ProfileCardProps) {
  return (
    <aside className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-[4/5] overflow-hidden border-b border-white/10 bg-slate-950/60">
        <Image
          src={photoUrl}
          alt={`${name} portrait`}
          fill
          priority
          sizes="(min-width: 1024px) 28rem, (min-width: 768px) 24rem, 100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11131a] via-[#11131a]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/15 bg-white/5">
              <Image
                src={avatarUrl}
                alt={`${name} avatar`}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{name}</p>
              <p className="text-sm text-slate-300">{title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 p-6 sm:p-7">
        <div className="space-y-3">
          <p className="text-base leading-7 text-slate-200">{summary}</p>
          {note ? <p className="text-sm leading-6 text-slate-400">{note}</p> : null}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <span className="text-lg" aria-hidden="true">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
