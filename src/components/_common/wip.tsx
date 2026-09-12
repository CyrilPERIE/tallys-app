import { ClockIcon } from "@phosphor-icons/react";

export const Wip = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-2 text-center sm:flex-row sm:text-left">
      <ClockIcon
        size={24}
        weight="bold"
        className="shrink-0 text-primary"
      />
      <p className="text-sm text-muted-foreground text-pretty">
        Travail en cours, des modélisations avancées sont en cours sur les données.
      </p>
      <p className="text-sm text-muted-foreground text-pretty">
        Des notebooks sont en cours d'ajout pour continuer d'explorer les données.
      </p>
    </div>
  );
};
