
const Logo = () => {
  return (
    <div>
      <picture>
        <source media="(min-width: 768px)" srcSet="/note-logo.png" />
        <img src="/mobile-note-logo.png" alt="logo" className="md:size-8 dark:invert dark:brightness-200" />
      </picture>
    </div>
  )
}

export default Logo
