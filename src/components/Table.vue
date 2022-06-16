<template>
  <a-button type="primary" @click="list()">
    Reload
  </a-button>
  <a-table :columns="columns" :data-source="students" :scroll="{ y: 600, x: 2500 }" bordered :loading="loading">
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'studentName'">
        <a>{{ text }}</a>
      </template>
    </template>
  </a-table>
</template>
<script>
import axios from "axios";
import {ref} from "vue";

const columns = [
      {
        title: 'STT',
        dataIndex: 'id',
        key: 'id',
        width: '60px',
        fixed: 'left',
      },
      {
        title: 'Họ và tên',
        dataIndex: 'studentName',
        key: 'studentName',
        fixed: 'left',
      },
      {
        title: 'Mã học sinh',
        dataIndex: 'studentID',
        key: 'studentID',
        fixed: 'left',
        width: '80px'
      },
      {
        title: 'Lớp',
        dataIndex: 'classroom',
        key: 'classroom',
        width: '58px',
      },

      {
        title: 'Trường tiểu học',
        dataIndex: 'school',
        key: 'school',
      },

      {
        title: 'Quận/Huyện',
        dataIndex: 'schoolAddress',
        key: 'schoolAddress',
        width: '116px',
      },
      {
        title: 'Ngày sinh',
        children: [
          {
            title: 'Ngày',
            dataIndex: 'day',
            key: 'day',
            width: '66px',
            align: 'center',
          },
          {
            title: 'Tháng',
            dataIndex: 'month',
            key: 'month',
            width: '73px',
            align: 'center',
          },
          {
            title: 'Năm',
            dataIndex: 'year',
            key: 'year',
            width: '66px',
            align: 'center',
          },
        ]
      },
      {
        title: 'Giới tính',
        dataIndex: 'gender',
        key: 'gender',
        width: '90px',
      },
      {
        title: 'Nơi sinh',
        dataIndex: 'placeOfBirth',
        key: 'placeOfBirth',
        width: '80px',
        align: 'center',
      },
      {
        title: 'Dân tộc',
        dataIndex: 'ethnicity',
        key: 'ethnicity',
        width: "80px",
        align: 'center',
      },
      {
        title: 'Hộ khẩu thường trú',
        dataIndex: 'homeAddress',
        key: 'homeAddress',
      },
      {
        title: 'Điện thoại liên hệ',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
      },
      {
        title: 'Điểm sơ tuyển',
        children: [
          {
            title: 'Tổng điểm năm lớp 1',
            dataIndex: 'firstGradeScore',
            key: 'firstGradeScore',
            align: 'center',
          },
          {
            title: 'Tổng điểm năm lớp 2',
            dataIndex: 'secondGradeScore',
            key: 'secondGradeScore',
            align: 'center',
          },
          {
            title: 'Tổng điểm năm lớp 3',
            dataIndex: 'thirdGradeScore',
            key: 'thirdGradeScore',
            align: 'center',
          },
          {
            title: 'Tổng điểm năm lớp 4',
            dataIndex: 'fourthGradeScore',
            key: 'fourthGradeScore',
            align: 'center',
          },
          {
            title: 'Tổng điểm năm lớp 5',
            dataIndex: 'fifthGradeScore',
            key: 'fifthGradeScore',
            align: 'center',
          },
          {
            title: 'Tổng điểm kết quả 5 năm',
            dataIndex: 'totalFiveGradeScore',
            key: 'totalFiveGradeScore',
            align: 'center',
          },
          {
            title: 'Điểm ưu tiên',
            dataIndex: 'priorityScore',
            key: 'priorityScore',
            align: 'center',
          },
          {
            title: 'Tổng điểm sơ tuyển',
            dataIndex: 'totalScore',
            key: 'totalScore',
            align: 'center',
          },
        ]
      },
      {
        title: 'Ghi chú',
        dataIndex: 'notes',
        key: 'notes',
        align: 'center',
      },
    ];
export default {
  name: 'DataTable',
  data() {
    const students = ref(null);
    const loading = ref(true);
    return {
      students,
      loading,
      columns,
    }
  },
  methods: {
    async list() {
      this.loading = true;
      const response = await axios.get("/api/studentslist");
      this.students = response.data;
      this.loading = false;
      console.log(response.data);
    },
    async load() {
      const response = await axios.get("/api/studentslist");
      this.students = response.data;
      this.loading = false;
    }
  },
  mounted() {
    this.load();
  }
}

</script>
<style lang="scss">
@use"@/assets/variables.scss";
.ant-table-thead > tr >th{
  color: #fff;
  background-color: #069255 !important;
}
</style>
