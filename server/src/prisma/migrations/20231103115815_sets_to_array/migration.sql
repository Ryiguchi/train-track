/*
  Warnings:

  - The `sets` column on the `workout` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "workout" ALTER COLUMN "date" DROP DEFAULT,
ALTER COLUMN "date" SET DATA TYPE TEXT,
DROP COLUMN "sets",
ADD COLUMN     "sets" JSONB[];
