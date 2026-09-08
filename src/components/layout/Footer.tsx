import { useContent } from '@/content';

const Footer = () => {
  const { profile } = useContent();

  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-[13px] text-muted">
          © {profile.name} · {profile.role}
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {profile.contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="text-[13px] text-muted transition-colors hover:text-accent"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
