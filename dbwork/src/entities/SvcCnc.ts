import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_ent", ["enterpriseId"], {})
@Index("machineno_enterprise", ["machineNo", "enterpriseId", "id"], {})
@Entity("svc_cnc", { schema: "dev" })
export class SvcCnc {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @Column("varchar", { name: "machine_no", nullable: true, length: 20 })
  machineNo: string | null;

  @Column("varchar", { name: "ip", nullable: true, length: 50 })
  ip: string | null;

  @Column("int", { name: "port", nullable: true })
  port: number | null;

  @Column("smallint", { name: "autostart", nullable: true })
  autostart: number | null;

  @Column("int", { name: "edge_id", nullable: true })
  edgeId: number | null;

  @Column("varchar", { name: "status", nullable: true, length: 20 })
  status: string | null;

  @Column("timestamp", { name: "modtime", default: () => "CURRENT_TIMESTAMP" })
  modtime: Date;

  @Column("int", { name: "enterprise_id", nullable: true })
  enterpriseId: number | null;

  @Column("varchar", { name: "cnctype", nullable: true, length: 20 })
  cnctype: string | null;

  @Column("varchar", { name: "mode", nullable: true, length: 10 })
  mode: string | null;

  @Column("varchar", { name: "comment", nullable: true, length: 225 })
  comment: string | null;
}
