// Marks view reveals and reveal rows as revealed once enough of them is visible.
// Each element sets its visible fraction with data-reveal-amount (default 0.15).
const observers = new Map<number, IntersectionObserver>();

function observerFor(amount: number) {
  let observer = observers.get(amount);
  if (!observer) {
    observer = new IntersectionObserver(
      (entries, current) => {
        for (const entry of entries) {
          if (entry.intersectionRatio < amount) continue;
          entry.target.setAttribute("data-revealed", "");
          current.unobserve(entry.target);
        }
      },
      { threshold: amount },
    );
    observers.set(amount, observer);
  }
  return observer;
}

for (const element of document.querySelectorAll<HTMLElement>(
  '[data-reveal-mode="view"], [data-reveal-row]',
)) {
  observerFor(Number(element.dataset.revealAmount ?? 0.15)).observe(element);
}
