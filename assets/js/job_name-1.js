// detail.php → form.php 応募案件名表示
const detail_job_names = document.querySelector('.detail__content--job--title');
const detail_job_name_text_all = detail_job_names.textContent;
const detail_job_name_text = detail_job_name_text_all.trim();

const detail_job_name_send = document.querySelector('#job_name_send');
detail_job_name_send.setAttribute('value', detail_job_name_text);

const form_job_name = document.querySelector('.form__content--cell--job-name');