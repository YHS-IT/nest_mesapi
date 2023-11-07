import { Column, Entity } from "typeorm";

@Entity("hdy_test2", { schema: "data" })
export class HdyTest2 {
  @Column("varchar", { name: "t", nullable: true, length: 10 })
  t: string | null;

  @Column("time", { name: "t2", nullable: true })
  t2: string | null;
}
