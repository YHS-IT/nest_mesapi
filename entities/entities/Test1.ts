import { Column, Entity } from "typeorm";

@Entity("test1", { schema: "data" })
export class Test1 {
  @Column("date", { name: "date", nullable: true })
  date: string | null;

  @Column("int", { name: "ent_id", nullable: true })
  entId: number | null;

  @Column("varchar", { name: "stime", nullable: true, length: 5 })
  stime: string | null;

  @Column("varchar", { name: "etime", nullable: true, length: 5 })
  etime: string | null;
}
