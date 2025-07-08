-- CreateEnum
CREATE TYPE "StatusContrato" AS ENUM ('PENDENTE', 'LIBERADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "TipoPessoa" AS ENUM ('FISICA', 'JURIDICA');

-- CreateEnum
CREATE TYPE "TipoRecebedor" AS ENUM ('CLIENTE', 'TERCEIRO');

-- CreateEnum
CREATE TYPE "PartnerRole" AS ENUM ('COMPRADOR', 'VENDEDOR', 'FINANCIADOR');

-- CreateEnum
CREATE TYPE "PropertyUsage" AS ENUM ('GARANTIA', 'ARRENDADA', 'PRÓPRIA');

-- CreateEnum
CREATE TYPE "OwnershipType" AS ENUM ('DONO', 'ARRENDATARIO');

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "transactionType" TEXT NOT NULL,
    "contractDate" TIMESTAMP(3) NOT NULL,
    "product" TEXT NOT NULL,
    "cropYear" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "sacks" DOUBLE PRECISION,
    "currency" TEXT NOT NULL,
    "brlValue" DOUBLE PRECISION,
    "usdValue" DOUBLE PRECISION,
    "ptaxRate" DOUBLE PRECISION,
    "ptaxDate" TIMESTAMP(3),
    "convertedValue" DOUBLE PRECISION,
    "totalValue" DOUBLE PRECISION,
    "branchOrigin" TEXT NOT NULL,
    "branchThirdParty" TEXT,
    "warehouse" TEXT,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "status" "StatusContrato" NOT NULL DEFAULT 'PENDENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL,
    "document" TEXT,
    "name" TEXT NOT NULL,
    "personType" "TipoPessoa" NOT NULL,
    "zipCode" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "registry" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payee" (
    "id" TEXT NOT NULL,
    "receiverType" "TipoRecebedor" NOT NULL,
    "name" TEXT,
    "personType" "TipoPessoa",
    "cpf" TEXT,
    "cnpj" TEXT,
    "bank" TEXT NOT NULL,
    "agency" TEXT NOT NULL,
    "account" TEXT NOT NULL,

    CONSTRAINT "Payee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractPartner" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "role" "PartnerRole" NOT NULL,
    "sharePercent" DOUBLE PRECISION,

    CONSTRAINT "ContractPartner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractProperty" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "usageType" "PropertyUsage" NOT NULL,
    "sharePercent" DOUBLE PRECISION,

    CONSTRAINT "ContractProperty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContractPayee" (
    "id" TEXT NOT NULL,
    "contractId" TEXT NOT NULL,
    "payeeId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "note" TEXT,

    CONSTRAINT "ContractPayee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerProperty" (
    "id" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "ownershipType" "OwnershipType" NOT NULL,
    "sharePercent" DOUBLE PRECISION,

    CONSTRAINT "PartnerProperty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contract_code_key" ON "Contract"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_document_key" ON "Partner"("document");

-- CreateIndex
CREATE UNIQUE INDEX "Property_registry_key" ON "Property"("registry");

-- CreateIndex
CREATE UNIQUE INDEX "Payee_cpf_key" ON "Payee"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Payee_cnpj_key" ON "Payee"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "ContractPartner_contractId_partnerId_key" ON "ContractPartner"("contractId", "partnerId");

-- CreateIndex
CREATE UNIQUE INDEX "ContractProperty_contractId_propertyId_key" ON "ContractProperty"("contractId", "propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "ContractPayee_contractId_payeeId_key" ON "ContractPayee"("contractId", "payeeId");

-- CreateIndex
CREATE UNIQUE INDEX "PartnerProperty_partnerId_propertyId_key" ON "PartnerProperty"("partnerId", "propertyId");

-- AddForeignKey
ALTER TABLE "ContractPartner" ADD CONSTRAINT "ContractPartner_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractPartner" ADD CONSTRAINT "ContractPartner_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractProperty" ADD CONSTRAINT "ContractProperty_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractProperty" ADD CONSTRAINT "ContractProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractPayee" ADD CONSTRAINT "ContractPayee_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContractPayee" ADD CONSTRAINT "ContractPayee_payeeId_fkey" FOREIGN KEY ("payeeId") REFERENCES "Payee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerProperty" ADD CONSTRAINT "PartnerProperty_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerProperty" ADD CONSTRAINT "PartnerProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
