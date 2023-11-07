import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("p_minfo", { schema: "data" })
export class PMinfo {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("varchar", { name: "material", nullable: true, length: 20 })
  material: string | null;

  @Column("int", { name: "g_id", nullable: true })
  gId: number | null;

  @Column("varchar", { name: "share", nullable: true, length: 30 })
  share: string | null;

  @Column("varchar", { name: "m_outer", nullable: true, length: 20 })
  mOuter: string | null;

  @Column("varchar", { name: "m_inner", nullable: true, length: 20 })
  mInner: string | null;

  @Column("varchar", { name: "m_length", nullable: true, length: 20 })
  mLength: string | null;
}
