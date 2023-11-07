import { Column, Entity } from "typeorm";

@Entity("hdy_test3", { schema: "data" })
export class HdyTest3 {
  @Column("time", { name: "t", nullable: true })
  t: string | null;

  @Column("time", { name: "t2", nullable: true })
  t2: string | null;
}
