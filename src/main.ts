import { combineLatest, fromEvent, Subject } from "rxjs";
import { filter, map } from "rxjs/operators";

interface RGB {
  r: number;
  g: number;
  b: number;
}

const leftSubject = new Subject<RGB>();
const rightSubject = new Subject<RGB>();

combineLatest([leftSubject, rightSubject]).subscribe(([left, right]) => {
  const mixed: RGB = {
    r: avg(left.r, right.r),
    g: avg(left.g, right.g),
    b: avg(left.b, right.b),
  };

  const mixer = document.querySelector(".colour-mixer") as HTMLElement;
  mixer.style.background = `linear-gradient(
    to right,
    ${encodeRgb(left)} 0%,
    ${encodeRgb(mixed)} 30%,
    ${encodeRgb(mixed)} 70%,
    ${encodeRgb(right)} 100%
  )`;
});

fromEvent(document, "click")
  .pipe(
    map((e) => e.target as HTMLElement),
    filter((element: HTMLElement) => {
      return element.classList.contains("colour");
    })
  )
  .subscribe(updateChoice);

function parseRgb(backgroundColor: string): RGB {
  const match = backgroundColor.match(/rgb\((\d+), ?(\d+), ?(\d+)\)/);
  return {
    r: parseInt(match[1], 10),
    g: parseInt(match[2], 10),
    b: parseInt(match[3], 10),
  };
}

function encodeRgb({ r, g, b }: RGB): string {
  return `rgb(${r}, ${g}, ${b})`;
}

function updateChoice(element: HTMLElement): void {
  setActiveClass(element);
  const rgb = parseRgb(window.getComputedStyle(element).backgroundColor);

  const parentElement = element.closest("[data-track]") as HTMLElement;
  const track = parentElement.getAttribute("data-track");
  if (track === "left") {
    leftSubject.next(rgb);
  } else {
    rightSubject.next(rgb);
  }
}

function setActiveClass(element: HTMLElement): void {
  Array.prototype.forEach.call(
    element.parentElement!.children,
    (sibling: HTMLElement) => {
      sibling.classList.remove("active");
    }
  );
  element.classList.add("active");
}

function avg(v1: number, v2: number): number {
  return Math.round((v1 + v2) / 2);
}

function init(): void {
  document.querySelectorAll(".colour.active").forEach(updateChoice);
}

init();
