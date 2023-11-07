import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("process_share", { schema: "data" })
export class ProcessShare {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "send_ent", nullable: true })
  sendEnt: number | null;

  @Column("int", { name: "receive_ent", nullable: true })
  receiveEnt: number | null;

  @Column("int", { name: "mkey", nullable: true })
  mkey: number | null;
}
