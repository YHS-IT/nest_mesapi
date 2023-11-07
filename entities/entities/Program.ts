import { Column, Entity } from "typeorm";

@Entity("program", { schema: "data" })
export class Program {
  @Column("varchar", { name: "mid", nullable: true, length: 10 })
  mid: string | null;

  @Column("varchar", { name: "no", nullable: true, length: 5 })
  no: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 45 })
  name: string | null;

  @Column("varchar", { name: "note", nullable: true, length: 10000 })
  note: string | null;

  @Column("timestamp", { name: "date", nullable: true })
  date: Date | null;

  @Column("varchar", { name: "pin", nullable: true, length: 1 })
  pin: string | null;
}
