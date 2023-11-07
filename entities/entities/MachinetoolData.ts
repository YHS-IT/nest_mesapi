import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProcessHist } from "./ProcessHist";
import { MachinetoolBase } from "./MachinetoolBase";

@Index("hist_seq", ["histSeq"], {})
@Index("base_id", ["baseId"], {})
@Entity("machinetool_data", { schema: "data" })
export class MachinetoolData {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("float", { name: "correction_xval", nullable: true, precision: 12 })
  correctionXval: number | null;

  @Column("int", { name: "count", nullable: true })
  count: number | null;

  @Column("int", { name: "hist_seq", nullable: true })
  histSeq: number | null;

  @Column("int", { name: "base_id", nullable: true })
  baseId: number | null;

  @Column("float", { name: "correction_zval", nullable: true, precision: 12 })
  correctionZval: number | null;

  @ManyToOne(() => ProcessHist, (processHist) => processHist.machinetoolData, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "hist_seq", referencedColumnName: "seq" }])
  histSeq2: ProcessHist;

  @ManyToOne(
    () => MachinetoolBase,
    (machinetoolBase) => machinetoolBase.machinetoolData,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "base_id", referencedColumnName: "id" }])
  base: MachinetoolBase;
}
