import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("alarm", { schema: "data" })
export class Alarm {
  @PrimaryGeneratedColumn({ type: "int", name: "no" })
  no: number;

  @Column("varchar", { name: "mid", nullable: true, length: 45 })
  mid: string | null;

  @Column("int", { name: "mkey", nullable: true, default: () => "'-1'" })
  mkey: number | null;

  @Column("timestamp", { name: "date", nullable: true })
  date: Date | null;

  @Column("varchar", { name: "msg_code", nullable: true, length: 10 })
  msgCode: string | null;

  @Column("varchar", { name: "msg_type", nullable: true, length: 10 })
  msgType: string | null;

  @Column("varchar", { name: "message", nullable: true, length: 200 })
  message: string | null;

  @Column("varchar", { name: "note", nullable: true, length: 200 })
  note: string | null;

  @Column("varchar", { name: "ent", nullable: true, length: 45 })
  ent: string | null;

  @Column("int", { name: "enterprise_id", nullable: true })
  enterpriseId: number | null;
}
