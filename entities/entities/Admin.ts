import { Column, Entity } from "typeorm";

@Entity("admin", { schema: "data" })
export class Admin {
  @Column("int", {
    name: "count_pgTime",
    nullable: true,
    default: () => "'30'",
  })
  countPgTime: number | null;

  @Column("varchar", { name: "ent", nullable: true, length: 10 })
  ent: string | null;
}
