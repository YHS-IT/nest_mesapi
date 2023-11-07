import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SvcEnterprise } from "./SvcEnterprise";
import { SvcCnc } from "./SvcCnc";

@Index("ent", ["ent"], {})
@Index("mid", ["mid"], {})
@Index("lot_idx", ["lot"], {})
@Entity("svc_cnc_status", { schema: "data" })
export class SvcCncStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "ent", nullable: true })
  ent: number | null;

  @Column("int", { name: "mid", nullable: true })
  mid: number | null;

  @Column("int", { name: "lot", nullable: true })
  lot: number | null;

  @Column("timestamp", { name: "start", default: () => "CURRENT_TIMESTAMP" })
  start: Date;

  @Column("timestamp", { name: "end", nullable: true })
  end: Date | null;

  @Column("int", { name: "code", nullable: true })
  code: number | null;

  @Column("text", { name: "comment", nullable: true })
  comment: string | null;

  @ManyToOne(
    () => SvcEnterprise,
    (svcEnterprise) => svcEnterprise.svcCncStatuses,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "ent", referencedColumnName: "id" }])
  ent2: SvcEnterprise;

  @ManyToOne(() => SvcCnc, (svcCnc) => svcCnc.svcCncStatuses, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "mid", referencedColumnName: "id" }])
  m: SvcCnc;
}
