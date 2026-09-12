import DrawerNotebook, { NotebookId } from "@/src/components/_common/notebooks/drawer.notebook";
import { SectionTitle } from "@/src/components/_common/section-title";

const Notebooks = ({ notebookIds }: { notebookIds: NotebookId[] }) => {
  return (
    <div>
        <SectionTitle title="Rapports" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {notebookIds.map((notebookId, index) => (
                <DrawerNotebook key={index} notebookId={notebookId} />
            ))}
        </div>
    </div>
  );
};

export default Notebooks;