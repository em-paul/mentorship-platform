import React from 'react';
import './Tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Modules.css';
import { RiFileInfoLine } from 'react-icons/ri';
import { IoCalendarOutline } from 'react-icons/io5';
import { BsQuestionCircle, BsClipboardData } from 'react-icons/bs';
import { GiPodiumWinner, GiMedicines, GiBullseye, GiPencil, GiSpellBook, GiMegaphone, GiPalette, GiChecklist, 
    GiMedallist, GiCardPick, GiLightBulb, GiQuillInk, GiPencilRuler, GiBookshelf, GiBookPile, GiLetterBomb, 
    GiFountainPen, GiMoneyStack, GiReceiveMoney, GiPayMoney, GiEarthAsiaOceania, GiScales, GiTennisRacket, 
    GiMusicalScore, GiUnbalanced, GiBlindfold } from 'react-icons/gi';
import { FaRegHospital, FaChalkboardTeacher, FaDatabase } from 'react-icons/fa';
import { AiOutlineControl, AiOutlineForm, AiOutlineStop } from 'react-icons/ai';
import { GoChecklist } from 'react-icons/go';
import { RiTreasureMapLine, RiGuideFill, RiMoneyPoundBoxLine } from 'react-icons/ri';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { GrOverview } from 'react-icons/gr';

function UKHowUCASOnClick() {
    window.open('https://projectaccess.org/how-ucas-apply-works')
}

const UKHowUCASButton = () => {
    return (
        <button onClick = {UKHowUCASOnClick} className = 'module-button'>
            <RiFileInfoLine size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> How UCAS application works </h6>
        </button>
    )
}

function UKUGAppCalOnClick() {
    window.open('https://static1.squarespace.com/static/5a1abda8aeb6251ef0a76deb/t/5e9dd44ee16858349cd3eca5/1587401807322/UNDERGRADUATE+CALENDAR+UK+with+links.pdf')
}

const UKUGAppCalButton = () => {
    return (
        <button onClick = {UKUGAppCalOnClick} className = 'module-button'>
            <IoCalendarOutline size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Undergraduate application calendar </h6>
        </button>
    )
}

function UKMythsOnClick() {
    window.open('https://www.ucas.com/sites/default/files/ucas-myth-busters-application-toolkit.pdf')
}

const UKMythsButton = () => {
    return (
        <button onClick = {UKMythsOnClick} className = 'module-button'>
            <BsQuestionCircle size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> UCAS myth busters </h6>
        </button>
    )
}

function UKTipsOnClick() {
    window.open('https://projectaccess.org/curriculum/applying-to-top-uk-universities-tips-for-a-successful-application')
}

const UKTipsButton = () => {
    return (
        <button onClick = {UKTipsOnClick} className = 'module-button'>
            <GiPodiumWinner size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Tips for a successful application </h6>
        </button>
    )
}

function UKApplyMedOnClick() {
    window.open('https://www.youtube.com/watch?v=5-yhsoUfSMQ')
}

const UKApplyMedButton = () => {
    return (
        <button onClick = {UKApplyMedOnClick} className = 'module-button'>
            <GiMedicines size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Applying to and studying Medicine </h6>
        </button>
    )
}

function UKGetMedOnClick() {
    window.open('https://projectaccess.org/s/Medmentor-X-Project-Access-Medicine-Resource.pdf')
}

const UKGetMedButton = () => {
    return (
        <button onClick = {UKGetMedOnClick} className = 'module-button'>
            <FaRegHospital size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> How to Get into Medicine </h6>
        </button>
    )
}

function UKGCSEOnClick() {
    window.open('https://projectaccess.org/gcse-grade-requirements-for-leading-uk-unis')
}

const UKGCSEButton = () => {
    return (
        <button onClick = {UKGCSEOnClick} className = 'module-button'>
            <GiBullseye size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> GCSE grade requirements for leading UK universities </h6>
        </button>
    )
}

function UKLangTipsOnClick() {
    window.open('https://projectaccess.org/curriculum/how-to-study-for-your-english-certificate')
}

const UKLangTipsButton = () => {
    return (
        <button onClick = {UKLangTipsOnClick} className = 'module-button'>
            <GiPencil size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Language requirements: study tips for the exam </h6>
        </button>
    )
}

function UKLangReqOnClick() {
    window.open('https://projectaccess.org/curriculum/english-language-requirements-ielts-toefl-cae-or-cpe-which-one-to-take')
}

const UKLangReqButton = () => {
    return (
        <button onClick = {UKLangReqOnClick} className = 'module-button'>
            <BsClipboardData size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Language requirements: IELTS, TOEFL, CAE, or CPE </h6>
        </button>
    )
}

function UKPSOnClick() {
    window.open('https://www.youtube.com/watch?v=_8hFkMAjW-I')
}

const UKPSButton = () => {
    return (
        <button onClick = {UKPSOnClick} className = 'module-button'>
            <AiOutlineControl size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Personal Statements: Finding a formula </h6>
        </button>
    )
}

function UKPSInDepthOnClick() {
    window.open('https://www.studential.com/university/applying/UCAS-application-guide/personal-statements/writing-guide/how-to-write-a-personal-statement')
}

const UKPSInDepthButton = () => {
    return (
        <button onClick = {UKPSInDepthOnClick} className = 'module-button'>
            <GiSpellBook size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> The personal statement: in-depth guide </h6>
        </button>
    )
}

function UKPSConvincingOnClick() {
    window.open('https://projectaccess.org/curriculum/how-to-write-a-convincing-personal-statement-uk')
}

const UKPSConvincingButton = () => {
    return (
        <button onClick = {UKPSConvincingOnClick} className = 'module-button'>
            <GiMegaphone size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> How to write a convincing personal Statement </h6>
        </button>
    )
}

function UKPSDeconstructOnClick() {
    window.open('https://projectaccess.org/curriculum/deconstructing-the-personal-statement')
}

const UKPSDeconstructButton = () => {
    return (
        <button onClick = {UKPSDeconstructOnClick} className = 'module-button'>
            <GoChecklist size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Deconstructing a personal statement: an example and guide </h6>
        </button>
    )
}

function UKPSStyleOnClick() {
    window.open('https://projectaccess.typeform.com/to/wwiWVB?email=xxxxx&name=xxxxx')
}

const UKPSStyleButton = () => {
    return (
        <button onClick = {UKPSStyleOnClick} className = 'module-button'>
            <GiPalette size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Personal Statement “style” lesson </h6>
        </button>
    )
}

function UKPSGuideOnClick() {
    window.open('https://www.youtube.com/watch?v=D9MikvLTxbk&feature=youtu.be')
}

const UKPSGuideButton = () => {
    return (
        <button onClick = {UKPSGuideOnClick} className = 'module-button'>
            <RiTreasureMapLine size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Guide to a Powerful Personal Statement </h6>
        </button>
    )
}

function UKPSContentOnClick() {
    window.open('https://projectaccess.org/personal-statement-content-lesson')
}

const UKPSContentButton = () => {
    return (
        <button onClick = {UKPSContentOnClick} className = 'module-button'>
            <GiChecklist size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Personal statement “content” lesson </h6>
        </button>
    )
}

function UKPSGoodOnClick() {
    window.open('https://projectaccess.org/how-to-write-a-good-personal-statement')
}

const UKPSGoodButton = () => {
    return (
        <button onClick = {UKPSGoodOnClick} className = 'module-button'>
            <GiMedallist size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> How to write a good personal statement </h6>
        </button>
    )
}

function UKPSTipsOnClick() {
    window.open('https://projectaccess.org/tips-on-writing-a-good-personal-statement')
}

const UKPSTipsButton = () => {
    return (
        <button onClick = {UKPSTipsOnClick} className = 'module-button'>
            <GiCardPick size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Tips on writing a good personal statement </h6>
        </button>
    )
}

function UKPSInspirationOnClick() {
    window.open('https://projectaccess.org/inspiration-for-your-personal-statement')
}

const UKPSInspirationButton = () => {
    return (
        <button onClick = {UKPSInspirationOnClick} className = 'module-button'>
            <GiLightBulb size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Inspiration for your personal statement </h6>
        </button>
    )
}

function UKPSGuide1OnClick() {
    window.open('https://www.youtube.com/watch?v=17EPnhhHopE')
}

const UKPSGuide1Button = () => {
    return (
        <button onClick = {UKPSGuide1OnClick} className = 'module-button'>
            <GiPencilRuler size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Personal statement guide 1 </h6>
        </button>
    )
}

function UKPSGuide2OnClick() {
    window.open('https://www.youtube.com/watch?v=46pDMvB1vIs')
}

const UKPSGuide2Button = () => {
    return (
        <button onClick = {UKPSGuide2OnClick} className = 'module-button'>
            <GiFountainPen size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Personal statement guide 2 </h6>
        </button>
    )
}

function UKPSExamplesOnClick() {
    window.open('https://www.studential.com/personal-statement-examples/oxford-university-personal-statements')
}

const UKPSExamplesButton = () => {
    return (
        <button onClick = {UKPSExamplesOnClick} className = 'module-button'>
            <GiBookshelf size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Examples of personal statements by subject </h6>
        </button>
    )
}

function UKPSCollectionOnClick() {
    window.open('https://www.thestudentroom.co.uk/wiki/Category:Oxford_Personal_Statements')
}

const UKPSCollectionButton = () => {
    return (
        <button onClick = {UKPSCollectionOnClick} className = 'module-button'>
            <GiBookPile size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Collections of personal statements by former Oxford applicants </h6>
        </button>
    )
}

function UKAdmissionsIntroOnClick() {
    window.open('https://projectaccess.org/admission-test-registration')
}

const UKAdmissionsIntroButton = () => {
    return (
        <button onClick = {UKAdmissionsIntroOnClick} className = 'module-button'>
            <RiFileInfoLine size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Introduction to admissions tests </h6>
        </button>
    )
}

function UKAdmissionsRegOnClick() {
    window.open('https://projectaccess.org/admission-test-registration')
}

const UKAdmissionsRegButton = () => {
    return (
        <button onClick = {UKAdmissionsRegOnClick} className = 'module-button'>
            <AiOutlineForm size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Admissions test registration </h6>
        </button>
    )
}

function UKAptitudeOnClick() {
    window.open('https://projectaccess.org/aptitude-tests')
}

const UKAptitudeButton = () => {
    return (
        <button onClick = {UKAptitudeOnClick} className = 'module-button'>
            <BsClipboardData size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Introduction to aptitude tests </h6>
        </button>
    )
}

function UKWriteRefOnClick() {
    window.open('https://www.ucas.com/advisers/references/how-write-ucas-undergraduate-references')
}

const UKWriteRefButton = () => {
    return (
        <button onClick = {UKWriteRefOnClick} className = 'module-button'>
            <FaChalkboardTeacher size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> UCAS Guide: How to write a reference (for your teacher) </h6>
        </button>
    )
}

function UKGetRefOnClick() {
    window.open('https://www.ucas.com/undergraduate/applying-university/how-get-ucas-undergraduate-reference')
}

const UKGetRefButton = () => {
    return (
        <button onClick = {UKGetRefOnClick} className = 'module-button'>
            <GiLetterBomb size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> UCAS Guide: How to get a reference </h6>
        </button>
    )
}

function UKCambridgeRefOnClick() {
    window.open('https://www.undergraduate.study.cam.ac.uk/find-out-more/teachers-and-parents/school-college-reference')
}

const UKCambridgeRefButton = () => {
    return (
        <button onClick = {UKCambridgeRefOnClick} className = 'module-button'>
            <GiQuillInk size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Cambridge: advice for references </h6>
        </button>
    )
}

function UKRefereeOnClick() {
    window.open('https://projectaccess.org/how-to-contact-a')
}

const UKRefereeButton = () => {
    return (
        <button onClick = {UKRefereeOnClick} className = 'module-button'>
            <HiOutlineUserGroup size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Contact a referee for UCAS application </h6>
        </button>
    )
}

function UKRecLetterGuide1OnClick() {
    window.open('https://www.youtube.com/watch?v=8LLCIA1Y9sY&feature=youtu.be')
}

const UKRecLetterGuide1Button = () => {
    return (
        <button onClick = {UKRecLetterGuide1OnClick} className = 'module-button'>
            <RiTreasureMapLine size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Letter of Recommendation Guide 1 </h6>
        </button>
    )
}

function UKRecLetterGuide2OnClick() {
    window.open('https://projectaccess.org/s/Guide-to-Letter-of-Recommendation.pdf')
}

const UKRecLetterGuide2Button = () => {
    return (
        <button onClick = {UKRecLetterGuide2OnClick} className = 'module-button'>
            <RiGuideFill size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Letter of Recommendation Guide 2 </h6>
        </button>
    )
}

function UKFinanceSupportOnClick() {
    window.open('https://www.ucas.com/undergraduate/student-life/getting-student-support/undergraduate-student-finance-and-support')
}

const UKFinanceSupportButton = () => {
    return (
        <button onClick = {UKFinanceSupportOnClick} className = 'module-button'>
            <RiMoneyPoundBoxLine size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> UCAS: Finance and support </h6>
        </button>
    )
}

function UKTuitionAndLoansOnClick() {
    window.open('https://www.ucas.com/finance/undergraduate-tuition-fees-and-student-loans')
}

const UKTuitionAndLoansButton = () => {
    return (
        <button onClick = {UKTuitionAndLoansOnClick} className = 'module-button'>
            <GiMoneyStack size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> UCAS: Tuition fees and Student loans </h6>
        </button>
    )
}

function UKApplyScholarshipsOnClick() {
    window.open('https://www.ucas.com/finance/additional-funding')
}

const UKApplyScholarshipsButton = () => {
    return (
        <button onClick = {UKApplyScholarshipsOnClick} className = 'module-button'>
            <GiReceiveMoney size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> UCAS: How to apply for additional funding and scholarships </h6>
        </button>
    )
}

function UKPayLoanOnClick() {
    window.open('https://www.ucas.com/finance/undergraduate-tuition-fees-and-student-loans')
}

const UKPayLoanButton = () => {
    return (
        <button onClick = {UKPayLoanOnClick} className = 'module-button'>
            <GiPayMoney size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> UCAS: repaying your student loan </h6>
        </button>
    )
}

function UKScholarshipDatabaseOnClick() {
    window.open('https://scholarship-positions.com/')
}

const UKScholarshipDatabaseButton = () => {
    return (
        <button onClick = {UKScholarshipDatabaseOnClick} className = 'module-button'>
            <FaDatabase size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Scholarship database </h6>
        </button>
    )
}

function UKCambridgeNonEUOnClick() {
    window.open('https://projectaccess.org/curriculum/funding-for-non-eu-undergraduate-students-at-cambridge')
}

const UKCambridgeNonEUButton = () => {
    return (
        <button onClick = {UKCambridgeNonEUOnClick} className = 'module-button'>
            <GiEarthAsiaOceania size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Funding for non-EU undergraduates at Cambridge </h6>
        </button>
    )
}

function USCommonAppOnClick() {
    window.open('https://www.youtube.com/watch?v=pziMelhmR6k')
}

const USCommonAppButton = () => {
    return (
        <button onClick = {USCommonAppOnClick} className = 'module-button'>
            <RiFileInfoLine size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Common application website tutorial </h6>
        </button>
    )
}

function USUGAppCalOnClick() {
    window.open('https://static1.squarespace.com/static/5a1abda8aeb6251ef0a76deb/t/5e9ecc7de188753f74bdf97e/1587465360487/UNDERGRADUATE+CALENDAR+US.pdf')
}

const USUGAppCalButton = () => {
    return (
        <button onClick = {USUGAppCalOnClick} className = 'module-button'>
            <IoCalendarOutline size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Undergraduate application calendar </h6>
        </button>
    )
}

function USFairOpportunityOnClick() {
    window.open('https://www.fairopportunityproject.org/')
}

const USFairOpportunityButton = () => {
    return (
        <button onClick = {USFairOpportunityOnClick} className = 'module-button'>
            <GiScales size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> The fair opportunity project </h6>
        </button>
    )
}

function USApplyMedOnClick() {
    window.open('https://youtu.be/g-wT7ckhY2k')
}

const USApplyMedButton = () => {
    return (
        <button onClick = {USApplyMedOnClick} className = 'module-button'>
            <GiMedicines size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Applying to medical school in the US </h6>
        </button>
    )
}

function USEssayExamplesOnClick() {
    window.open('https://projectaccess.org/applying-to-university-resources/2020/10/13/example-essays')
}

const USEssayExamplesButton = () => {
    return (
        <button onClick = {USEssayExamplesOnClick} className = 'module-button'>
            <GiBookPile size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Example essays </h6>
        </button>
    )
}

function USEssayKAOnClick() {
    window.open('https://projectaccess.org/applying-to-university-resources/2020/10/13/khan-academy-what-makes-a-great-admissions-essay')
}

const USEssayKAButton = () => {
    return (
        <button onClick = {USEssayKAOnClick} className = 'module-button'>
            <GiChecklist size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Khan Academy: what makes a great admissions essay </h6>
        </button>
    )
}

function USCommonAppTipsOnClick() {
    window.open('https://www.collegeessayadvisors.com/portfolio-items/common-application-essay-tips/')
}

const USCommonAppTipsButton = () => {
    return (
        <button onClick = {USCommonAppTipsOnClick} className = 'module-button'>
            <GiCardPick size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Top six common application tips </h6>
        </button>
    )
}

function USAppAvoidOnClick() {
    window.open('https://www.youtube.com/watch?v=cOPoROA2Iio')
}

const USAppAvoidButton = () => {
    return (
        <button onClick = {USAppAvoidOnClick} className = 'module-button'>
            <AiOutlineStop size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> What to avoid in your application </h6>
        </button>
    )
}

function USECActivitiesKAOnClick() {
    window.open('https://www.khanacademy.org/college-careers-more/college-admissions/making-high-school-count#extracurricular-and-leadership')
}

const USECActivitiesKAButton = () => {
    return (
        <button onClick = {USECActivitiesKAOnClick} className = 'module-button'>
            <GiTennisRacket size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Khan Academy: extracurricular and leadership activities </h6>
        </button>
    )
}

function USECWhatWhyOnClick() {
    window.open('https://blog.prepscholar.com/what-are-extracurricular-activities-and-why-do-you-need-them')
}

const USECWhatWhyButton = () => {
    return (
        <button onClick = {USECWhatWhyOnClick} className = 'module-button'>
            <GiMusicalScore size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> What are extracurriculars and why do you need them? </h6>
        </button>
    )
}

function USECPrioritizeOnClick() {
    window.open('https://www.studypoint.com/expert-advice/how-should-i-prioritize-my-extra-curricular-activi/')
}

const USECPrioritizeButton = () => {
    return (
        <button onClick = {USECPrioritizeOnClick} className = 'module-button'>
            <GiUnbalanced size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> How to prioritize your activities </h6>
        </button>
    )
}

function USAceSATOnClick() {
    window.open('https://blog.prepscholar.com/how-to-get-a-perfect-sat-score-by-a-2400-sat-scorer')
}

const USAceSATButton = () => {
    return (
        <button onClick = {USAceSATOnClick} className = 'module-button'>
            <GiMedallist size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> How to ace the SAT </h6>
        </button>
    )
}

function USSATOverviewOnClick() {
    window.open('https://www.khanacademy.org/test-prep/sat/new-sat-tips-planning/new-sat-about-sat/a/redesigned-sat-content-and-format')
}

const USSATOverviewButton = () => {
    return (
        <button onClick = {USSATOverviewOnClick} className = 'module-button'>
            <GrOverview size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> An overview of the new SAT </h6>
        </button>
    )
}

function USIntFinAidOnClick() {
    window.open('https://en.wikipedia.org/wiki/Student_financial_aid_(United_States)#International_students(United_States)#International_students')
}

const USIntFinAidButton = () => {
    return (
        <button onClick = {USIntFinAidOnClick} className = 'module-button'>
            <GiEarthAsiaOceania size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Financial Aid for international students </h6>
        </button>
    )
}

function USNeedBlindOnClick() {
    window.open('https://en.wikipedia.org/wiki/Need-blind_admission')
}

const USNeedBlindButton = () => {
    return (
        <button onClick = {USNeedBlindOnClick} className = 'module-button'>
            <GiBlindfold size = '3em' color = 'rgb(0, 0, 0)'/>
            <h6> Explanation of need-blind admissions at US universities </h6>
        </button>
    )
}

export const ApplyCard = () => {
    return (
        <div className = 'modules-card'>
            <h4 style = {{fontWeight: 'bold'}} > Applying to University </h4>
            <Tabs>
                <TabList>
                    <Tab className = 'react-tabs__module-tab' selectedClassName = 'react-tabs__module-tab--selected'>
                        Applying to the UK
                    </Tab>
                    <Tab className = 'react-tabs__module-tab' selectedClassName = 'react-tabs__module-tab--selected'>
                        Applying to the US
                    </Tab>
                    <Tab className = 'react-tabs__module-tab' selectedClassName = 'react-tabs__module-tab--selected'>
                        Postgraduate Studies
                    </Tab>
                </TabList>
                <TabPanel>
                    <div style = {{width: '76.5vw'}}>
                        <h4 style = {{fontWeight: 'bold'}} > Applying to the UK </h4>
                        <div className = 'contents'>
                            <h5 style = {{fontWeight: 'bold'}} > 1. How to Get In: Introduction </h5>
                            <div className = 'nested-module-grid'>
                                <UKHowUCASButton />
                                <UKUGAppCalButton />
                                <UKMythsButton />
                                <UKTipsButton />
                                <UKApplyMedButton />
                                <UKGetMedButton />
                            </div>
                            <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 2. How to Get In: Grade and Language Requirements </h5>
                            <div className = 'nested-module-grid'>
                                <UKGCSEButton />
                                <UKLangTipsButton />
                                <UKLangReqButton />
                            </div>
                            <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 3. How to Get In: The Personal Statement </h5>
                            <div className = 'nested-module-grid'>
                                <UKPSButton />
                                <UKPSInDepthButton />
                                <UKPSConvincingButton />
                                <UKPSDeconstructButton />
                                <UKPSStyleButton />
                                <UKPSGuideButton />
                                <UKPSContentButton />
                                <UKPSGoodButton />
                                <UKPSTipsButton />
                                <UKPSInspirationButton />
                                <UKPSGuide1Button />
                                <UKPSGuide2Button />
                                <UKPSExamplesButton />
                                <UKPSCollectionButton />
                            </div>
                            <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 4. How to Get In: Admissions Tests </h5>
                            <div className = 'nested-module-grid'>
                                {/* UKAdmissionsIntroButton links to same page as UKAdmissionsRegButton */}
                                <UKAdmissionsIntroButton />
                                <UKAdmissionsRegButton />
                                <UKAptitudeButton />
                            </div>
                            <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 5. How to Get In: References </h5>
                            <div className = 'nested-module-grid'>
                                <UKWriteRefButton />
                                <UKGetRefButton />
                                <UKCambridgeRefButton />
                                <UKRefereeButton />
                            </div>
                            <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 6. How to Get In: Letter of Recommendation </h5>
                            <div className = 'nested-module-grid'>
                                <UKRecLetterGuide1Button />
                                <UKRecLetterGuide2Button />
                            </div>
                            <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 7. Financial Aid and Scholarships </h5>
                            <div className = 'nested-module-grid'>
                                <UKFinanceSupportButton />
                                <UKTuitionAndLoansButton />
                                <UKApplyScholarshipsButton />
                                {/* UKPayLoanButton links to same page as UKTuitionAndLoansButton */}
                                <UKPayLoanButton />
                                <UKScholarshipDatabaseButton />
                                <UKCambridgeNonEUButton />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div style = {{width: '76.5vw'}}>
                        <h4 style = {{fontWeight: 'bold'}} > Applying to the US </h4>
                        <div className = 'contents'>
                            <h5 style = {{fontWeight: 'bold'}} > 1. How to Get In: Introduction </h5>
                            <div className = 'nested-module-grid'>
                                <USCommonAppButton />
                                <USUGAppCalButton />
                                <USFairOpportunityButton />
                                <USApplyMedButton />
                            </div>
                            <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 2. How to Get In: Essays </h5>
                            <div className = 'nested-module-grid'>
                                <USEssayExamplesButton />
                                {/* USEssayKAButton link does not have any content */}
                                <USEssayKAButton />
                                <USCommonAppTipsButton />
                                <USAppAvoidButton />
                            </div>
                            <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 3. How to Get In: Extra-Curricular Activities and CV/Resume </h5>
                            <div className = 'nested-module-grid'>
                                <USECActivitiesKAButton />
                                <USECWhatWhyButton />
                                <USECPrioritizeButton />
                            </div>
                            <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 4. How to Get In: Standardized Tests </h5>
                            <div className = 'nested-module-grid'>
                                <USSATOverviewButton />
                                <USAceSATButton />
                            </div>
                            <h5 style = {{fontWeight: 'bold', paddingTop: '1em'}} > 5. Financial Aid for International Students </h5>
                            <div className = 'nested-module-grid'>
                                <USIntFinAidButton />
                                <USNeedBlindButton />
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div style = {{width: '76.5vw'}}>
                        <h4 style = {{fontWeight: 'bold'}} > Postgraduate Studies </h4>
                        Scroll to the bottom of 
                        <a href = 'https://projectaccess.org/applying-to-university'> this page </a>
                        to find resources for applying for postgraduate studies, grouped by topic.
                        {/* <div className = 'contents'>
                            <h5 style = {{fontWeight: 'bold'}} > 1.  </h5>
                            <div className = 'nested-module-grid'>
                                
                            </div>
                        </div> */}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}
