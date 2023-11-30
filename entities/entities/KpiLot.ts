import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("kpi_lot", { schema: "data" })
export class KpiLot {
  @PrimaryGeneratedColumn({ type: "int", name: "seq" })
  seq: number;

  @Column("date", { name: "date", nullable: true })
  date: string | null;

  @Column("int", { name: "mkey", nullable: true })
  mkey: number | null;

  @Column("int", { name: "lot", nullable: true })
  lot: number | null;

  @Column("int", { name: "lot_diff", nullable: true })
  lotDiff: number | null;
}
