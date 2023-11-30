import { Column, Entity } from "typeorm";

@Entity("ref_code", { schema: "data" })
export class RefCode {
  @Column("varchar", {
    primary: true,
    name: "grp_cd",
    comment: "그룹코드",
    length: 30,
  })
  grpCd: string;

  @Column("varchar", { primary: true, name: "cd", comment: "코드", length: 30 })
  cd: string;

  @Column("varchar", { name: "cd_name", comment: "코드명", length: 50 })
  cdName: string;

  @Column("varchar", {
    name: "cd_desc",
    nullable: true,
    comment: "코드 상세 설명",
    length: 300,
  })
  cdDesc: string | null;

  @Column("float", {
    name: "value_num",
    nullable: true,
    comment: "다용도 값(숫자)",
    precision: 12,
  })
  valueNum: number | null;

  @Column("varchar", {
    name: "value_str",
    nullable: true,
    comment: "다용도 값(문자)",
    length: 3000,
  })
  valueStr: string | null;

  @Column("varchar", { name: "reg_emp_name", comment: "등록자명", length: 12 })
  regEmpName: string;

  @Column("timestamp", {
    name: "reg_date",
    comment: "등록일자",
    default: () => "CURRENT_TIMESTAMP",
  })
  regDate: Date;
}
