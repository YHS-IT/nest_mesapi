import { Column, Entity, Index } from "typeorm";

@Index("grp_cd_UNIQUE", ["grpCd"], { unique: true })
@Entity("ref_code_grp", { schema: "data" })
export class RefCodeGrp {
  @Column("varchar", {
    primary: true,
    name: "grp_cd",
    comment: "그룹코드",
    length: 30,
  })
  grpCd: string;

  @Column("varchar", { name: "grp_cd_name", comment: "그룹코드명", length: 50 })
  grpCdName: string;

  @Column("varchar", {
    name: "grp_cd_desc",
    nullable: true,
    comment: "그룹코드 상세설명",
    length: 300,
  })
  grpCdDesc: string | null;

  @Column("varchar", { name: "reg_emp_name", comment: "등록자명", length: 12 })
  regEmpName: string;

  @Column("timestamp", {
    name: "reg_date",
    comment: "등록일자",
    default: () => "CURRENT_TIMESTAMP",
  })
  regDate: Date;
}
