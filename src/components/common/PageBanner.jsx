function PageBanner({ title, breadcrumbs }) {
  return (
    <div className="relative h-[30vh] min-h-70 sm:min-h-80 w-full overflow-hidden">
      <img
        src="/banner.png"
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand/60" />
      <div className="relative flex h-full flex-col items-center justify-center gap-3 px-4 sm:px-6 text-center">
        <nav className="flex flex-wrap items-center justify-center gap-2 text-[13px] sm:text-sm font-secondary text-surface/80">
          {breadcrumbs.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {item.href ? (
                <a href={item.href} className="transition-colors hover:text-surface">
                  {item.label}
                </a>
              ) : (
                <span className="text-surface">{item.label}</span>
              )}
              {i < breadcrumbs.length - 1 && (
                <span className="text-surface/40">/</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-[28px] sm:text-[38px] md:text-[48px] font-primary text-surface leading-none">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default PageBanner;

