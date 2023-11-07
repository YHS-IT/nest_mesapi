import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tool_history", { schema: "data" })
export class ToolHistory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "mkey", nullable: true })
  mkey: number | null;

  @Column("varchar", { name: "mid", nullable: true, length: 20 })
  mid: string | null;

  @Column("varchar", { name: "tool_name", nullable: true, length: 20 })
  toolName: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 20 })
  type: string | null;

  @Column("int", { name: "tool_id", nullable: true })
  toolId: number | null;

  @Column("int", { name: "tool_cnc_id", nullable: true })
  toolCncId: number | null;

  @Column("datetime", { name: "date", nullable: true })
  date: Date | null;

  @Column("int", { name: "count", nullable: true })
  count: number | null;

  @Column("int", { name: "set_count_val", nullable: true })
  setCountVal: number | null;
}
