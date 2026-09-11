import { useState } from "react";
import { Images } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ProjectFolder = {
  name: string;
  images: string[];
};

const projectFolders: ProjectFolder[] = [
  {
    name: "Clariant company singer chowrangi Karachi",
    images: [
      "WhatsApp Image 2026-09-10 at 7.53.25 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.53.26 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.53.26 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 7.53.26 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.53.27 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.53.27 AM.jpeg",
    ],
  },
  {
    name: "D h a phase 6 Karachi",
    images: [
      "WhatsApp Image 2026-09-10 at 7.48.19 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.48.19 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 7.48.19 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.48.20 AM.jpeg",
    ],
  },
  {
    name: "Defence phase 4 Karachi",
    images: [
      "WhatsApp Image 2026-09-10 at 7.39.23 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.39.24 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.39.24 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.39.25 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.39.25 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 7.39.25 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.39.26 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.39.26 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 7.39.26 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.39.27 AM.jpeg",
    ],
  },
  {
    name: "Hyperstar Karachi",
    images: [
      "WhatsApp Image 2026-09-10 at 7.58.18 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.58.18 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.58.19 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.58.19 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 7.58.19 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.58.20 AM.jpeg",
    ],
  },
  {
    name: "Joban fabrics dolmen Mall Tariq road Karachi",
    images: [
      "WhatsApp Image 2026-09-10 at 8.09.44 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.09.44 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 8.09.45 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.09.45 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 8.09.45 AM (3).jpeg",
      "WhatsApp Image 2026-09-10 at 8.09.45 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 8.09.46 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.09.46 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 8.09.46 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 8.09.47 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.09.47 AM.jpeg",
    ],
  },
  {
    name: "Ocean Tower laboratory Karachi",
    images: [
      "WhatsApp Image 2026-09-10 at 8.04.53 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.04.53 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 8.04.53 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 8.04.54 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.04.54 AM.jpeg",
    ],
  },
  {
    name: "Ufone all branches Karachi",
    images: [
      "WhatsApp Image 2026-09-10 at 8.03.06 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 8.03.07 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.03.07 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 8.03.08 AM.jpeg",
    ],
  },
  {
    name: "j. Fragrancies and cosmetic Lucky one Mall Karachi",
    images: [
      "WhatsApp Image 2026-09-10 at 8.01.40 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.01.40 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 8.01.40 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 8.01.41 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.01.41 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 8.01.41 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 8.01.42 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.01.42 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 8.01.43 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 8.01.43 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 8.01.43 AM.jpeg",
    ],
  },
  {
    name: "j. Fragrancies and cosmetic dolmen Mall Tariq road Karachi",
    images: [
      "WhatsApp Image 2026-09-10 at 7.44.00 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.44.00 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.44.01 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.44.01 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 7.44.01 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.44.02 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.44.02 AM (2).jpeg",
      "WhatsApp Image 2026-09-10 at 7.44.02 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.44.03 AM (1).jpeg",
      "WhatsApp Image 2026-09-10 at 7.44.03 AM.jpeg",
      "WhatsApp Image 2026-09-10 at 7.44.04 AM.jpeg",
    ],
  },
];

function imageUrl(folder: ProjectFolder, filename: string) {
  return `/projects/${encodeURIComponent(folder.name)}/${encodeURIComponent(filename)}`;
}

export function ProjectGallery() {
  const [selectedFolder, setSelectedFolder] = useState<ProjectFolder | null>(null);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projectFolders.map((folder) => {
        const thumbnail = imageUrl(folder, folder.images[0]);

        return (
          <Dialog
            key={folder.name}
            open={selectedFolder?.name === folder.name}
            onOpenChange={(open) => setSelectedFolder(open ? folder : null)}
          >
            <DialogTrigger asChild>
              <button
                type="button"
                className="group overflow-hidden rounded-sm border border-border bg-card text-left transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={thumbnail}
                    alt={folder.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-5 pt-14">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                      {folder.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <span className="text-sm font-semibold">View project gallery</span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Images className="size-3.5" /> {folder.images.length} photos
                  </span>
                </div>
              </button>
            </DialogTrigger>

            <DialogContent className="max-h-[92svh] max-w-6xl overflow-y-auto p-5 sm:p-7">
              <DialogTitle className="pr-8 text-xl sm:text-2xl">{folder.name}</DialogTitle>
              <DialogDescription>
                {folder.images.length} project photos from the Ali Enterprises portfolio.
              </DialogDescription>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {folder.images.map((filename, index) => (
                  <a
                    key={filename}
                    href={imageUrl(folder, filename)}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-sm border border-border bg-muted"
                  >
                    <img
                      src={imageUrl(folder, filename)}
                      alt={`${folder.name} project photo ${index + 1}`}
                      loading="lazy"
                      className="aspect-[4/3] size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
