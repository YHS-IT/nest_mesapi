import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("p_process", { schema: "data" })
export class PProcess {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "m_id", nullable: true })
  mId: number | null;

  @Column("varchar", { name: "process", nullable: true, length: 30 })
  process: string | null;

  @Column("tinyint", {
    name: "status",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  status: boolean | null;

  @Column("int", { name: "ord", nullable: true, default: () => "'0'" })
  ord: number | null;

  @Column("datetime", { name: "date", nullable: true })
  date: Date | null;
}
