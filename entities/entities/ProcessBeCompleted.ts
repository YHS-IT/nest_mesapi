import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SvcEnterprise } from "./SvcEnterprise";
import { ProcessLot } from "./ProcessLot";
import { SvcCnc } from "./SvcCnc";

@Index("ent_idx", ["ent"], {})
@Index("mid_idx", ["mid"], {})
@Index("lot_idx", ["lot"], {})
@Entity("process_be_completed", { schema: "data" })
export class ProcessBeCompleted {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", {
    name: "ent",
    nullable: true,
    comment: "업체 id (FK : svc_enterprise.id)",
  })
  ent: number | null;

  @Column("int", {
    name: "mid",
    nullable: true,
    comment: "장비 id, (FK : svc_cnc.id)",
  })
  mid: number | null;

  @Column("int", {
    name: "lot",
    nullable: true,
    comment: "lot 번호 (FK : process_lot.lot)",
  })
  lot: number | null;

  @Column("datetime", {
    name: "end_time",
    nullable: true,
    comment: "완료예정시각",
  })
  endTime: Date | null;

  @Column("timestamp", { name: "time", nullable: true, comment: "등록일시" })
  time: Date | null;

  @ManyToOne(
    () => SvcEnterprise,
    (svcEnterprise) => svcEnterprise.processBeCompleteds,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "ent", referencedColumnName: "id" }])
  ent2: SvcEnterprise;

  @ManyToOne(() => ProcessLot, (processLot) => processLot.processBeCompleteds, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "lot", referencedColumnName: "lot" }])
  lot2: ProcessLot;

  @ManyToOne(() => SvcCnc, (svcCnc) => svcCnc.processBeCompleteds, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "mid", referencedColumnName: "id" }])
  m: SvcCnc;
}
