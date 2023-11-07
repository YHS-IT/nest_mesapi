import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tool_list", { schema: "data" })
export class ToolList {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "tool_name", nullable: true, length: 20 })
  toolName: string | null;
}
