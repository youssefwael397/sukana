export const handleScrollToSection =
  (targetId: string) =>
  (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };
