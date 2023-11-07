import {Column,Entity,Index,JoinColumn,ManyToOne} from "typeorm";
import {SvcEnterprise} from './SvcEnterprise'
import {SvcCnc} from './SvcCnc'


@Index("idx_process_report_01",["entId",],{  })
@Index("idx_process_report_02",["mkey",],{  })
@Entity("process_report" ,{schema:"data" } )
export  class ProcessReport {

@Column("date",{ primary:true,name:"report_date",comment:"리포트 집계일" })
reportDate:string;

@Column("int",{ primary:true,name:"ent_id",comment:"업체ID" })
entId:number;

@Column("int",{ primary:true,name:"mkey",comment:"기계 고유ID (svc_cnc.id)" })
mkey:number;

@Column("int",{ primary:true,name:"lot",comment:"생산로트" })
lot:number;

@Column("varchar",{ name:"집계 대상 업체",comment:"리포트 대상 실 업체명",length:100 })
:string;

@Column("varchar",{ name:"ent_code",comment:"업체코드",length:40 })
entCode:string;

@Column("datetime",{ name:"집계 시작일시",comment:"리포트 집계 기준 시작일시" })
:Date;

@Column("datetime",{ name:"집계 종료일시",comment:"리포트 집계 기준 종료일시" })
:Date;

@Column("varchar",{ name:"machine_name",comment:"장비명",length:40 })
machineName:string;

@Column("int",{ name:"machine_no",comment:"업체별 로컬 장비ID (svc_cnc.machine_no)" })
machineNo:number;

@Column("varchar",{ name:"program",comment:"공정프로그램",length:100 })
program:string;

@Column("int",{ name:"가공개수",nullable:true,comment:"가동시작~종료시까지 가공한 총개수" })
:number | null;

@Column("datetime",{ name:"조업 시작",comment:"기계가동 시작시간" })
:Date;

@Column("datetime",{ name:"조업 종료",comment:"기계가동 종료시간" })
:Date;

@Column("time",{ name:"조업중 총 휴게시간",nullable:true,comment:"사전 레퍼런스 입력 값" })
:string | null;

@Column("time",{ name:"집계 단위조업시간",nullable:true,comment:"리포트집계 시작~종료까지의 총 시간" })
:string | null;

@Column("time",{ name:"집계 단위부하시간",nullable:true,comment:"집계단위조업시간 - 조업중총휴게시간" })
:string | null;

@Column("time",{ name:"표준 조업시간",nullable:true,comment:"상시조업시간(보통 휴게시간,점심시간 포함하여 9시간)" })
:string | null;

@Column("time",{ name:"표준 부하시간",nullable:true,comment:"표준조업시간 - 조업중총휴게시간" })
:string | null;

@Column("time",{ name:"실 조업시간",nullable:true,comment:"기계가동 시작~종료 까지의 시간" })
:string | null;

@Column("time",{ name:"실 부하시간",nullable:true,comment:"실조업시간 - 조업중총휴게시간" })
:string | null;

@Column("time",{ name:"실 가공시간",nullable:true,comment:"조업시간내 실가공시간의 합계" })
:string | null;

@Column("time",{ name:"집계 단위조업 대비 비가동시간",nullable:true,comment:"집계 단위조업시간-실가공시간" })
:string | null;

@Column("time",{ name:"집계 단위부하 대비 비가동시간",nullable:true,comment:"집계 단위부하시간-실가공시간" })
:string | null;

@Column("time",{ name:"표준 조업 대비 비가동시간",nullable:true,comment:"표준조업시간-실가공시간" })
:string | null;

@Column("time",{ name:"표준 부하 대비 비가동시간",nullable:true,comment:"표준부하시간-실가공시간" })
:string | null;

@Column("time",{ name:"실 조업 대비 비가동시간",nullable:true,comment:"실조업시간-실가공시간" })
:string | null;

@Column("time",{ name:"실 부하 대비 비가동시간",nullable:true,comment:"실부하시간-실가공시간" })
:string | null;

@Column("decimal",{ name:"집계 단위조업시간 대비 가동율",nullable:true,comment:"실가공시간/집계단위조업시간*100",precision:6,scale:2 })
:string | null;

@Column("decimal",{ name:"집계 단위부하시간 대비 가동율",nullable:true,comment:"실가공시간/집계단위부하시간*100",precision:6,scale:2 })
:string | null;

@Column("decimal",{ name:"표준 조업시간 대비 가동율",nullable:true,comment:"실가공시간/표준조업시간*100",precision:6,scale:2 })
:string | null;

@Column("decimal",{ name:"표준 부하시간 대비 가동율",nullable:true,comment:"실가공시간/표준부하시간*100",precision:6,scale:2 })
:string | null;

@Column("decimal",{ name:"실 조업시간 대비 가동율",nullable:true,comment:"실가공시간/실조업시간*100",precision:6,scale:2 })
:string | null;

@Column("decimal",{ name:"실 부하시간 대비 가동율",nullable:true,comment:"실가공시간/실부하시간*100",precision:6,scale:2 })
:string | null;

@Column("time",{ name:"평균 가공시간",nullable:true,comment:"가공시간 = 실가공시간+가공중대기시간" })
:string | null;

@Column("time",{ name:"평균 실가공시간",nullable:true,comment:"실가공시간 = 가공시간-가공중대기시간" })
:string | null;

@Column("time",{ name:"평균 준비교체시간",nullable:true,comment:"전싸이클종료~현싸이클시작까지의 시간" })
:string | null;

@Column("time",{ name:"평균 가공중 대기시간",nullable:true,comment:"가공중대기시간 = 가공시간-실가공시간" })
:string | null;

@Column("time",{ name:"실 Cycle Time",nullable:true,comment:"실CT = 가공시간+준비교체시간" })
cycleTime:string | null;

@ManyToOne(()=>SvcEnterprise,svcEnterprise=>svcEnterprise.processReports,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "ent_id", referencedColumnName: "id" },
])

ent:SvcEnterprise;

@ManyToOne(()=>SvcCnc,svcCnc=>svcCnc.processReports,{ onDelete:"RESTRICT",onUpdate:"RESTRICT" })
@JoinColumn([{ name: "mkey", referencedColumnName: "id" },
])

mkey2:SvcCnc;

}
