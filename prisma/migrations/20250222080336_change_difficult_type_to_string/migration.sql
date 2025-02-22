/*
  Warnings:

  - Changed the type of `difficulty` on the `Project` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "difficulty",
ADD COLUMN     "difficulty" VARCHAR(255) NOT NULL;

-- DropEnum
DROP TYPE "DifficultyEnum";
