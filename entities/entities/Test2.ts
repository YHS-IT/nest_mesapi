import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("test2", { schema: "data" })
export class Test2 {
  @Column("int", { name: "ent_id", nullable: true })
  entId: number | null;

  @Column("varchar", { name: "stime", nullable: true, length: 5 })
  stime: string | null;

  @Column("varchar", { name: "etime", nullable: true, length: 5 })
  etime: string | null;

  @Column("varchar", { name: "comment", nullable: true, length: 20 })
  comment: string | null;

  @Column("varchar", { name: "ent", nullable: true, length: 10 })
  ent: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;
}
