const { fuzzyLogicMatch } = require('../utilities/attendance_status');
const { get_user_id_from_header } = require('../utilities/manage_user_id');

// get, /api/attendance
async function getAttendanceData(req, res) {
  try {
    const user_id = await get_user_id_from_header(req);

    const result = await fuzzyLogicMatch(user_id);

    res.json({ result });

  } catch (error) {
    console.error('Error executing function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAttendanceData,
}
