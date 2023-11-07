import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SvcEnterprise } from "./SvcEnterprise";
import { SvcCnc } from "./SvcCnc";
import { MachinetoolData } from "./MachinetoolData";

@Index("ent", ["ent"], {})
@Index("mid", ["mid"], {})
@Entity("machinetool_base", { schema: "data" })
export class MachinetoolBase {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "ent", nullable: true })
  ent: number | null;

  @Column("int", { name: "mid", nullable: true })
  mid: number | null;

  @Column("timestamp", { name: "date", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Column("int", { name: "lot_no", nullable: true })
  lotNo: number | null;

  @Column("varchar", { name: "process_no", nullable: true, length: 45 })
  processNo: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 45 })
  type: string | null;

  @Column("varchar", { name: "tool_no", nullable: true, length: 45 })
  toolNo: string | null;

  @Column("float", {
    name: "base_correction_xval",
    nullable: true,
    precision: 12,
  })
  baseCorrectionXval: number | null;

  @Column("int", { name: "set_count_val", nullable: true })
  setCountVal: number | null;

  @Column("varchar", { name: "tool_name", nullable: true, length: 45 })
  toolName: string | null;

  @Column("float", {
    name: "base_correction_zval",
    nullable: true,
    precision: 12,
  })
  baseCorrectionZval: number | null;

  @ManyToOne(
    () => SvcEnterprise,
    (svcEnterprise) => svcEnterprise.machinetoolBases,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "ent", referencedColumnName: "id" }])
  ent2: SvcEnterprise;

  @ManyToOne(() => SvcCnc, (svcCnc) => svcCnc.machinetoolBases, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "mid", referencedColumnName: "id" }])
  m: SvcCnc;

  @OneToMany(() => MachinetoolData, (machinetoolData) => machinetoolData.base)
  machinetoolData: MachinetoolData[];
}
