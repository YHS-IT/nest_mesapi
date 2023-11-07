import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_schedule", { schema: "data" })
export class OrderSchedule {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "process_id", nullable: true })
  processId: number | null;

  @Column("int", { name: "active_time", nullable: true })
  activeTime: number | null;

  @Column("int", { name: "setting_time", nullable: true })
  settingTime: number | null;

  @Column("int", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("int", { name: "mkey", nullable: true })
  mkey: number | null;

  @Column("timestamp", { name: "plan_start", nullable: true })
  planStart: Date | null;

  @Column("varchar", { name: "est_end", nullable: true, length: 45 })
  estEnd: string | null;
}
