import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_ent_mid_lot_count", ["ent", "mid", "lot", "count"], {})
@Entity("tooldata", { schema: "data" })
export class Tooldata {
  @PrimaryGeneratedColumn({ type: "int", name: "seq" })
  seq: number;

  @Column("varchar", { name: "ent", nullable: true, length: 45 })
  ent: string | null;

  @Column("int", { name: "mid", nullable: true })
  mid: number | null;

  @Column("int", { name: "lot", nullable: true })
  lot: number | null;

  @Column("int", { name: "count", nullable: true })
  count: number | null;

  @Column("int", { name: "no", nullable: true })
  no: number | null;

  @Column("int", { name: "xwear", nullable: true })
  xwear: number | null;

  @Column("int", { name: "zwear", nullable: true })
  zwear: number | null;

  @Column("int", { name: "ywear", nullable: true })
  ywear: number | null;

  @Column("int", { name: "xgeom", nullable: true })
  xgeom: number | null;

  @Column("int", { name: "zgeom", nullable: true })
  zgeom: number | null;

  @Column("int", { name: "ygeom", nullable: true })
  ygeom: number | null;

  @Column("int", { name: "rwear", nullable: true })
  rwear: number | null;

  @Column("int", { name: "rgeom", nullable: true })
  rgeom: number | null;

  @Column("int", { name: "t", nullable: true })
  t: number | null;

  @Column("timestamp", { name: "regdate", nullable: true })
  regdate: Date | null;
}
