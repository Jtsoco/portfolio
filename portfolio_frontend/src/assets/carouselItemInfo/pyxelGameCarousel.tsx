
interface CarouselItemInfo {
  src: string;
  alt: string;
  captionTitle: string;
  captionText: string;
}
export function pyxelGameInfo() {
  return [
    {
      src: "games/platformer.gif",
      alt: "Platformer Game Screenshot",
      captionTitle: "Pyxel Dungeon Explorer",
      captionText: "A retro-style dungeon exploration game built with Pyxel. Defeat bosses, get new weapons, shields, and powerups as you progress"
    },
    {
      src: "games/boss.gif",
      alt: "Boss Fight Screenshot",
      captionTitle: "Boss Fights",
      captionText: "Beating a boss can even earn powerups from that boss."
    },
    {
      src: "games/pyxel-title.png",
      alt: "Title Screen Screenshot",
      captionTitle: "Title Screen",
      captionText: "The title screen of the game, with the ability to select a different starter character each with their own unique weapon and shield."
    }


  ]
}
