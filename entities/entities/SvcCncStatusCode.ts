import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SvcEnterprise } from "./SvcEnterprise";

@Index("ent", ["ent"], {})
@Entity("svc_cnc_status_code", { schema: "data" })
export class SvcCncStatusCode {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "ent", nullable: true })
  ent: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 11 })
  name: string | null;

  @ManyToOne(
    () => SvcEnterprise,
    (svcEnterprise) => svcEnterprise.svcCncStatusCodes,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "ent", referencedColumnName: "id" }])
  ent2: SvcEnterprise;
}
