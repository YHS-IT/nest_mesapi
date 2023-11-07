import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("process_schedule", { schema: "data" })
export class ProcessSchedule {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mkey", nullable: true })
  mkey: number | null;

  @Column("varchar", { name: "process", nullable: true, length: 100 })
  process: string | null;

  @Column("int", { name: "count", nullable: true })
  count: number | null;

  @Column("datetime", { name: "start", nullable: true })
  start: Date | null;

  @Column("int", { name: "cycle_time", nullable: true })
  cycleTime: number | null;

  @Column("int", { name: "enterprise_id", nullable: true })
  enterpriseId: number | null;

  @Column("datetime", { name: "end", nullable: true })
  end: Date | null;

  @Column("int", { name: "setting_time", nullable: true })
  settingTime: number | null;
}
