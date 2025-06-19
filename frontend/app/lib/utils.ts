import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleScrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return

    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset - 30,
            behavior: "smooth"
        });
    }
  }