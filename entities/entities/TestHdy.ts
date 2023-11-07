import { Column, Entity } from "typeorm";

@Entity("test_hdy", { schema: "data" })
export class TestHdy {
  @Column("int", { name: "test", nullable: true })
  test: number | null;
}
