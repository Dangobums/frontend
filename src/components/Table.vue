<template>
  <div class="table-main">
      <div class="student-input_field">
        <div class="student-input-name">
          <div class="input-name">Student Name</div>
          <div class="input-field">
            <a-input v-model:value="studentName" size="large" @press-enter="onSearch"/>
          </div>
        </div>
        <div class="student-input-id">
          <div class="input-name">Student ID</div>
          <div class="input-field"><a-input v-model:value="studentId" size="large"  @press-enter="onSearch"/></div>

        </div>
      </div>
      <div class="button-group">
        <div class="button-group_submit">
          <a-button type="primary" @click="onSearch" class="submit">
            Submit
          </a-button>
        </div>
        <div class="button-group_reload">
          <a-button type="primary" @click="list()">
            Reload
          </a-button>
        </div>

      </div>

    <a-table :columns="columns" :data-source="students" :scroll="{ y: 600, x: 2500 }" bordered :loading="loading" >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'studentName'">
          <span>{{ text }}</span>
        </template>
      </template>
    </a-table>
  </div>

</template>
<script>
import axios from "axios";
import {ref} from "vue";
import {notification} from "ant-design-vue";

const columns = [
      {
        title: 'STT',
        dataIndex: 'id',
        key: 'id',
        width: '60px',
        fixed: 'left',
        align: 'center'
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
        align: 'center',
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
        align: 'center',
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
  props: {

  },
  data() {
    const students = ref(null);
    const loading = ref(true);
    const studentName = ref('');
    const studentId = ref('');
    return {
      students,
      loading,
      columns,
      studentName,
      studentId,

    }
  },
  methods: {
    async list() {
      this.loading = true;
      const response = await axios.get("/api/studentslist");
      this.students = response.data;
      this.loading = false;
    },
    async load() {
      try {
        const response = await axios.get("/api/studentslist");
        this.students = response.data;
        this.loading = false;
      }
      catch(error){
        if (error.message.includes("500")) {
          notification["error"]({
            message: "Error",
            description: 'Server not responding',
            duration: 2,
          });
          this.loading = false;
          console.error(error.message);
        }

      }
    },
    async onSearch() {
      this.loading = true;
      // console.log(this.studentId);
      const response = await axios.get(`http://localhost:7070/api/search?id=${this.studentId}&name=${this.studentName}`);
      this.students = response.data;
      this.loading = false;
      // console.log(response.data);
    },
  },
  mounted() {
    this.load();
  }
}

</script>
<style lang="scss">
@use"@/assets/variables.scss";
.ant-table-thead > tr >th{
  color: #3b3b35;
  background-color: #069255 !important;
  border-color: #069255;
}
.table-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.student-input-name {
  display: flex;
  justify-content: center;
  align-items: center;
  .input-name {
    margin: 16px;
  }
  .input-field {
    margin: 12px;
    width: 80%;
  }
}
.student-input-id{
  display: flex;
  justify-content: center;
  align-items: center;
  .input-name {
    justify-self: flex-start;
    margin: 16px;
    padding: 11px;
  }
  .input-field {
    margin: 12px;
    width: 80%;
  }
}
.button-group {
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin: 12px;
  .button-group_submit {
    margin-right: 12px;
  }
  .button-group_reload {
    margin-left: 12px;
  }
}
.ant-table-wrapper {
  min-width: 50%;
}

</style>
