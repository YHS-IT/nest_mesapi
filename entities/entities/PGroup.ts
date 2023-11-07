import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("p_group", { schema: "data" })
export class PGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @Column("varchar", { name: "code", nullable: true, length: 20 })
  code: string | null;
}
