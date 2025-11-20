import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export interface ServiceTileData {
  title: string;
  description: string;
  image: string;
  detailedInfo: string;
}

interface ServiceTileModalProps {
  tile: ServiceTileData;
  index: number;
}

export default function ServiceTileModal({ tile, index }: ServiceTileModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer"
        data-testid={`tile-service-${index}`}
      >
        <div className="relative h-[350px] w-full rounded-lg overflow-hidden hover-elevate active-elevate-2 transition-all">
          <img
            src={tile.image}
            alt={tile.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <h3 className="mb-3 text-2xl font-bold text-white" data-testid={`text-title-${index}`}>
              {tile.title}
            </h3>
            <p className="text-sm text-white/90 line-clamp-2" data-testid={`text-description-${index}`}>
              {tile.description}
            </p>
            <p className="mt-4 text-xs text-white/70">Klik voor meer informatie</p>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]" data-testid={`modal-service-${index}`}>
          <DialogHeader>
            <DialogTitle className="text-2xl">{tile.title}</DialogTitle>
            <DialogDescription className="text-base pt-4">
              {tile.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden">
              <img
                src={tile.image}
                alt={tile.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {tile.detailedInfo}
            </p>
            <div className="flex gap-3 pt-4">
              <Link href="/contact" className="flex-1">
                <Button className="w-full" onClick={() => setOpen(false)} data-testid={`button-contact-${index}`}>
                  Neem Contact Op
                </Button>
              </Link>
              <Button variant="outline" onClick={() => setOpen(false)} className="flex-1" data-testid={`button-close-${index}`}>
                Sluiten
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
