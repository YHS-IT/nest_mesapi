import { Column, Entity } from "typeorm";

@Entity("decrypt", { schema: "data" })
export class Decrypt {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "val", nullable: true, length: 100 })
  val: string | null;
}
