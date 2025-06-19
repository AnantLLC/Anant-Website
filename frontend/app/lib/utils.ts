import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export  function handleScrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return

    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({top: offsetPosition, behavior: "smooth" });
    }
  }