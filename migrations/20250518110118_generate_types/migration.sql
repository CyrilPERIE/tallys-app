/*
  Warnings:

  - You are about to drop the `Bet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Bet";

-- CreateTable
CREATE TABLE "Identifiable" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "libelleCourt" TEXT NOT NULL,
    "libelleLong" TEXT NOT NULL,

    CONSTRAINT "Identifiable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timestamped" (
    "id" SERIAL NOT NULL,
    "timestamp" INTEGER NOT NULL,
    "timezoneOffset" INTEGER NOT NULL,

    CONSTRAINT "Timestamped_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentaireSource" (
    "id" SERIAL NOT NULL,
    "texte" TEXT NOT NULL,
    "source" TEXT NOT NULL,

    CONSTRAINT "CommentaireSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NomNumPMU" (
    "id" SERIAL NOT NULL,
    "numPmu" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "aVIId" INTEGER,

    CONSTRAINT "NomNumPMU_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TauxContribution" (
    "id" SERIAL NOT NULL,
    "numerateur" INTEGER NOT NULL,
    "denominateur" INTEGER NOT NULL,

    CONSTRAINT "TauxContribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penetrometre" (
    "id" SERIAL NOT NULL,
    "valeurMesure" TEXT,
    "heureMesure" TEXT NOT NULL,
    "intitule" TEXT NOT NULL,
    "commentaire" TEXT NOT NULL,

    CONSTRAINT "Penetrometre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "numeroParticipants" INTEGER[],
    "courseElementId" INTEGER,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReunionHippodrome" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "libelleCourt" TEXT NOT NULL,
    "libelleLong" TEXT NOT NULL,

    CONSTRAINT "ReunionHippodrome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseHippodrome" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "libelleCourt" TEXT NOT NULL,
    "libelleLong" TEXT NOT NULL,
    "codeHippodrome" TEXT NOT NULL,

    CONSTRAINT "CourseHippodrome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Meteo" (
    "id" SERIAL NOT NULL,
    "datePrevision" INTEGER NOT NULL,
    "nebulositeCode" TEXT NOT NULL,
    "nebulositeLibelleCourt" TEXT NOT NULL,
    "nebulositeLibelleLong" TEXT NOT NULL,
    "temperature" INTEGER NOT NULL,
    "forceVent" INTEGER NOT NULL,
    "directionVent" TEXT NOT NULL,

    CONSTRAINT "Meteo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PronosticsResponse" (
    "id" SERIAL NOT NULL,
    "nom_prix" TEXT NOT NULL,
    "id_nav_course" INTEGER NOT NULL,
    "num_course_pmu" INTEGER NOT NULL,
    "nb_partants" INTEGER NOT NULL,
    "source" TEXT NOT NULL,
    "compressed" BOOLEAN NOT NULL,
    "dateReunion" INTEGER NOT NULL,
    "numeroReunion" INTEGER NOT NULL,
    "numeroCourse" INTEGER NOT NULL,
    "pronoId" INTEGER NOT NULL,

    CONSTRAINT "PronosticsResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PronoPmuFr" (
    "id" SERIAL NOT NULL,
    "presentationCourseTranslate" TEXT NOT NULL,
    "chapeauId" INTEGER NOT NULL,

    CONSTRAINT "PronoPmuFr_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapeau" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "translate" TEXT NOT NULL,

    CONSTRAINT "Chapeau_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Selection" (
    "id" SERIAL NOT NULL,
    "cote_prob" TEXT NOT NULL,
    "id_nav_partant" INTEGER NOT NULL,
    "rang" INTEGER NOT NULL,
    "num_partant" INTEGER NOT NULL,
    "pronoPmuFrId" INTEGER,

    CONSTRAINT "Selection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PronosticsDetaillesResponse" (
    "id" SERIAL NOT NULL,
    "commentaireId" INTEGER NOT NULL,
    "quinte" BOOLEAN NOT NULL,

    CONSTRAINT "PronosticsDetaillesResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AVI" (
    "id" SERIAL NOT NULL,
    "societe" TEXT NOT NULL,
    "journaliste" TEXT NOT NULL,
    "pronosticsDetaillesResponseId" INTEGER,

    CONSTRAINT "AVI_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crible" (
    "id" SERIAL NOT NULL,
    "numPmu" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "commentaire" TEXT NOT NULL,
    "partant" BOOLEAN NOT NULL,
    "pronosticsDetaillesResponseId" INTEGER,

    CONSTRAINT "Crible_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Synthesis" (
    "id" SERIAL NOT NULL,
    "intitule" TEXT NOT NULL,
    "pronosticsDetaillesResponseId" INTEGER,

    CONSTRAINT "Synthesis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SynthesisClassement" (
    "id" SERIAL NOT NULL,
    "numPmu" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "nbFoisCite" INTEGER NOT NULL,
    "synthesisId" INTEGER,

    CONSTRAINT "SynthesisClassement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RapportsDefinitifsResponse" (
    "id" SERIAL NOT NULL,
    "typePari" TEXT NOT NULL,
    "miseBase" INTEGER NOT NULL,
    "rembourse" BOOLEAN NOT NULL,
    "audience" TEXT NOT NULL,
    "dividendeUnite" TEXT NOT NULL,
    "famillePari" TEXT NOT NULL,

    CONSTRAINT "RapportsDefinitifsResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rapport" (
    "id" SERIAL NOT NULL,
    "libelle" TEXT NOT NULL,
    "dividende" DOUBLE PRECISION NOT NULL,
    "dividendePourUnEuro" DOUBLE PRECISION NOT NULL,
    "combinaison" INTEGER[],
    "nombreGagnants" INTEGER NOT NULL,
    "dividendePourUneMiseDeBase" DOUBLE PRECISION NOT NULL,
    "dividendeUnite" TEXT NOT NULL,
    "rapportsDefinitifsResponseId" INTEGER,

    CONSTRAINT "Rapport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Programme" (
    "id" SERIAL NOT NULL,
    "cached" BOOLEAN NOT NULL,
    "date" INTEGER NOT NULL,
    "timezoneOffset" INTEGER NOT NULL,
    "prochainesCoursesAPartir" JSONB NOT NULL,
    "datesProgrammesDisponibles" TEXT[],

    CONSTRAINT "Programme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reunion" (
    "id" SERIAL NOT NULL,
    "cached" BOOLEAN NOT NULL,
    "timezoneOffset" INTEGER NOT NULL,
    "dateReunion" INTEGER NOT NULL,
    "numOfficiel" INTEGER NOT NULL,
    "numOfficielReunionPrecedente" INTEGER,
    "numOfficielReunionSuivante" INTEGER NOT NULL,
    "numExterne" INTEGER NOT NULL,
    "nature" TEXT NOT NULL,
    "audience" TEXT NOT NULL,
    "statut" TEXT NOT NULL,
    "derniereReunion" BOOLEAN NOT NULL,
    "offresInternet" BOOLEAN NOT NULL,
    "regionHippique" TEXT,
    "meteoId" INTEGER NOT NULL,
    "hippodromeId" INTEGER NOT NULL,
    "disciplinesMere" TEXT[],
    "specialites" TEXT[],
    "paysId" INTEGER NOT NULL,
    "programmeId" INTEGER,

    CONSTRAINT "Reunion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pays" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,

    CONSTRAINT "Pays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseElement" (
    "id" SERIAL NOT NULL,
    "departImminent" BOOLEAN NOT NULL,
    "arriveeDefinitive" BOOLEAN NOT NULL,
    "timezoneOffset" INTEGER NOT NULL,
    "numReunion" INTEGER NOT NULL,
    "numExterneReunion" INTEGER NOT NULL,
    "numOrdre" INTEGER NOT NULL,
    "numExterne" INTEGER NOT NULL,
    "heureDepart" INTEGER NOT NULL,
    "libelle" TEXT NOT NULL,
    "libelleCourt" TEXT NOT NULL,
    "montantPrix" INTEGER NOT NULL,
    "parcours" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "distanceUnit" TEXT NOT NULL,
    "discipline" TEXT NOT NULL,
    "specialite" TEXT NOT NULL,
    "categorieParticularite" TEXT NOT NULL,
    "conditionAge" TEXT,
    "conditionSexe" TEXT NOT NULL,
    "nombreDeclaresPartants" INTEGER NOT NULL,
    "grandPrixNationalTrot" BOOLEAN NOT NULL,
    "numSocieteMere" INTEGER NOT NULL,
    "pariMultiCourses" BOOLEAN NOT NULL,
    "pariSpecial" BOOLEAN NOT NULL,
    "montantTotalOffert" INTEGER NOT NULL,
    "montantOffert1er" INTEGER NOT NULL,
    "montantOffert2eme" INTEGER NOT NULL,
    "montantOffert3eme" INTEGER NOT NULL,
    "montantOffert4eme" INTEGER NOT NULL,
    "montantOffert5eme" INTEGER NOT NULL,
    "conditions" TEXT NOT NULL,
    "numCourseDedoublee" INTEGER NOT NULL,
    "statut" TEXT NOT NULL,
    "categorieStatut" TEXT NOT NULL,
    "dureeCourse" INTEGER NOT NULL,
    "rapportsDefinitifsDisponibles" BOOLEAN NOT NULL,
    "isArriveeDefinitive" BOOLEAN NOT NULL,
    "isDepartImminent" BOOLEAN NOT NULL,
    "isDepartAJPlusUn" BOOLEAN NOT NULL,
    "pronosticsExpires" BOOLEAN NOT NULL,
    "replayDisponible" BOOLEAN NOT NULL,
    "epcPourTousParis" BOOLEAN NOT NULL,
    "courseTrackee" BOOLEAN NOT NULL,
    "courseExclusiveInternet" BOOLEAN NOT NULL,
    "formuleChampLibreIndisponible" BOOLEAN NOT NULL,
    "hasEParis" BOOLEAN NOT NULL,
    "corde" TEXT,
    "numQuestion" INTEGER[],
    "indicateurEvenementArriveeProvisoire" TEXT,
    "detailsIndicateurEvenementArriveeProvisoire" TEXT,
    "typePiste" TEXT,
    "penetrometreId" INTEGER,
    "ordreArrivee" JSONB NOT NULL,
    "hippodromeId" INTEGER NOT NULL,
    "reunionId" INTEGER,

    CONSTRAINT "CourseElement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paris" (
    "id" SERIAL NOT NULL,
    "poolId" TEXT,
    "typePari" TEXT NOT NULL,
    "miseBase" INTEGER NOT NULL,
    "miseMax" INTEGER,
    "enVente" BOOLEAN NOT NULL,
    "audience" TEXT NOT NULL,
    "cagnotte" INTEGER,
    "reportable" BOOLEAN NOT NULL,
    "codePari" TEXT NOT NULL,
    "nbChevauxReglementaire" INTEGER NOT NULL,
    "ordre" BOOLEAN NOT NULL,
    "combine" BOOLEAN NOT NULL,
    "spotAutorise" BOOLEAN NOT NULL,
    "complement" BOOLEAN NOT NULL,
    "misEnPaiement" BOOLEAN,
    "nouveauQuinte" BOOLEAN,
    "valeursFlexiAutorisees" INTEGER[],
    "valeursRisqueAutorisees" INTEGER[],
    "infosJackpotId" INTEGER,
    "infosOptionMaxId" INTEGER,
    "courseElementId" INTEGER,

    CONSTRAINT "Paris_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfosJackpot" (
    "id" SERIAL NOT NULL,
    "miseBase" INTEGER NOT NULL,
    "tauxId" INTEGER NOT NULL,

    CONSTRAINT "InfosJackpot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfosOptionMax" (
    "id" SERIAL NOT NULL,
    "miseBase" INTEGER NOT NULL,
    "tauxId" INTEGER NOT NULL,

    CONSTRAINT "InfosOptionMax_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tirage" (
    "id" SERIAL NOT NULL,
    "coef" INTEGER NOT NULL,
    "numeros" INTEGER[],
    "infosOptionMaxId" INTEGER,

    CONSTRAINT "Tirage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cagnotte" (
    "id" SERIAL NOT NULL,
    "numCourse" INTEGER NOT NULL,
    "typePari" TEXT NOT NULL,
    "montant" INTEGER NOT NULL,
    "cagnotteInternet" BOOLEAN NOT NULL,
    "typeCagnotte" TEXT,
    "reunionId" INTEGER,
    "courseElementId" INTEGER,

    CONSTRAINT "Cagnotte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParisEvenement" (
    "id" SERIAL NOT NULL,
    "codePari" TEXT NOT NULL,
    "dateProgramme" INTEGER NOT NULL,
    "numReunion" INTEGER NOT NULL,
    "numOrdre" INTEGER NOT NULL,
    "reunionId" INTEGER,

    CONSTRAINT "ParisEvenement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PoolID" (
    "id" SERIAL NOT NULL,
    "codePari" TEXT NOT NULL,
    "poolId" TEXT NOT NULL,

    CONSTRAINT "PoolID_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhotosArrivee" (
    "id" SERIAL NOT NULL,
    "heightSize" INTEGER NOT NULL,
    "widthSize" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "originalSize" BOOLEAN NOT NULL,

    CONSTRAINT "PhotosArrivee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NomNumPMU" ADD CONSTRAINT "NomNumPMU_aVIId_fkey" FOREIGN KEY ("aVIId") REFERENCES "AVI"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_courseElementId_fkey" FOREIGN KEY ("courseElementId") REFERENCES "CourseElement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PronosticsResponse" ADD CONSTRAINT "PronosticsResponse_pronoId_fkey" FOREIGN KEY ("pronoId") REFERENCES "PronoPmuFr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PronoPmuFr" ADD CONSTRAINT "PronoPmuFr_chapeauId_fkey" FOREIGN KEY ("chapeauId") REFERENCES "Chapeau"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Selection" ADD CONSTRAINT "Selection_pronoPmuFrId_fkey" FOREIGN KEY ("pronoPmuFrId") REFERENCES "PronoPmuFr"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PronosticsDetaillesResponse" ADD CONSTRAINT "PronosticsDetaillesResponse_commentaireId_fkey" FOREIGN KEY ("commentaireId") REFERENCES "CommentaireSource"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AVI" ADD CONSTRAINT "AVI_pronosticsDetaillesResponseId_fkey" FOREIGN KEY ("pronosticsDetaillesResponseId") REFERENCES "PronosticsDetaillesResponse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crible" ADD CONSTRAINT "Crible_pronosticsDetaillesResponseId_fkey" FOREIGN KEY ("pronosticsDetaillesResponseId") REFERENCES "PronosticsDetaillesResponse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Synthesis" ADD CONSTRAINT "Synthesis_pronosticsDetaillesResponseId_fkey" FOREIGN KEY ("pronosticsDetaillesResponseId") REFERENCES "PronosticsDetaillesResponse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SynthesisClassement" ADD CONSTRAINT "SynthesisClassement_synthesisId_fkey" FOREIGN KEY ("synthesisId") REFERENCES "Synthesis"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rapport" ADD CONSTRAINT "Rapport_rapportsDefinitifsResponseId_fkey" FOREIGN KEY ("rapportsDefinitifsResponseId") REFERENCES "RapportsDefinitifsResponse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reunion" ADD CONSTRAINT "Reunion_meteoId_fkey" FOREIGN KEY ("meteoId") REFERENCES "Meteo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reunion" ADD CONSTRAINT "Reunion_hippodromeId_fkey" FOREIGN KEY ("hippodromeId") REFERENCES "ReunionHippodrome"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reunion" ADD CONSTRAINT "Reunion_paysId_fkey" FOREIGN KEY ("paysId") REFERENCES "Pays"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reunion" ADD CONSTRAINT "Reunion_programmeId_fkey" FOREIGN KEY ("programmeId") REFERENCES "Programme"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseElement" ADD CONSTRAINT "CourseElement_penetrometreId_fkey" FOREIGN KEY ("penetrometreId") REFERENCES "Penetrometre"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseElement" ADD CONSTRAINT "CourseElement_hippodromeId_fkey" FOREIGN KEY ("hippodromeId") REFERENCES "CourseHippodrome"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseElement" ADD CONSTRAINT "CourseElement_reunionId_fkey" FOREIGN KEY ("reunionId") REFERENCES "Reunion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paris" ADD CONSTRAINT "Paris_infosJackpotId_fkey" FOREIGN KEY ("infosJackpotId") REFERENCES "InfosJackpot"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paris" ADD CONSTRAINT "Paris_infosOptionMaxId_fkey" FOREIGN KEY ("infosOptionMaxId") REFERENCES "InfosOptionMax"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paris" ADD CONSTRAINT "Paris_courseElementId_fkey" FOREIGN KEY ("courseElementId") REFERENCES "CourseElement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfosJackpot" ADD CONSTRAINT "InfosJackpot_tauxId_fkey" FOREIGN KEY ("tauxId") REFERENCES "TauxContribution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfosOptionMax" ADD CONSTRAINT "InfosOptionMax_tauxId_fkey" FOREIGN KEY ("tauxId") REFERENCES "TauxContribution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tirage" ADD CONSTRAINT "Tirage_infosOptionMaxId_fkey" FOREIGN KEY ("infosOptionMaxId") REFERENCES "InfosOptionMax"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cagnotte" ADD CONSTRAINT "Cagnotte_reunionId_fkey" FOREIGN KEY ("reunionId") REFERENCES "Reunion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cagnotte" ADD CONSTRAINT "Cagnotte_courseElementId_fkey" FOREIGN KEY ("courseElementId") REFERENCES "CourseElement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParisEvenement" ADD CONSTRAINT "ParisEvenement_reunionId_fkey" FOREIGN KEY ("reunionId") REFERENCES "Reunion"("id") ON DELETE SET NULL ON UPDATE CASCADE;
