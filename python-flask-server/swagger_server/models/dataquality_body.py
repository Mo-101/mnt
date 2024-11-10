# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class DataqualityBody(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, input_data: Object=None, quality_checks: Object=None):  # noqa: E501
        """DataqualityBody - a model defined in Swagger

        :param input_data: The input_data of this DataqualityBody.  # noqa: E501
        :type input_data: Object
        :param quality_checks: The quality_checks of this DataqualityBody.  # noqa: E501
        :type quality_checks: Object
        """
        self.swagger_types = {
            'input_data': Object,
            'quality_checks': Object
        }

        self.attribute_map = {
            'input_data': 'input_data',
            'quality_checks': 'quality_checks'
        }
        self._input_data = input_data
        self._quality_checks = quality_checks

    @classmethod
    def from_dict(cls, dikt) -> 'DataqualityBody':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The dataquality_body of this DataqualityBody.  # noqa: E501
        :rtype: DataqualityBody
        """
        return util.deserialize_model(dikt, cls)

    @property
    def input_data(self) -> Object:
        """Gets the input_data of this DataqualityBody.

        Dataset for quality checks.  # noqa: E501

        :return: The input_data of this DataqualityBody.
        :rtype: Object
        """
        return self._input_data

    @input_data.setter
    def input_data(self, input_data: Object):
        """Sets the input_data of this DataqualityBody.

        Dataset for quality checks.  # noqa: E501

        :param input_data: The input_data of this DataqualityBody.
        :type input_data: Object
        """

        self._input_data = input_data

    @property
    def quality_checks(self) -> Object:
        """Gets the quality_checks of this DataqualityBody.

        Quality checks to perform, such as 'missing_values' and 'outliers'.  # noqa: E501

        :return: The quality_checks of this DataqualityBody.
        :rtype: Object
        """
        return self._quality_checks

    @quality_checks.setter
    def quality_checks(self, quality_checks: Object):
        """Sets the quality_checks of this DataqualityBody.

        Quality checks to perform, such as 'missing_values' and 'outliers'.  # noqa: E501

        :param quality_checks: The quality_checks of this DataqualityBody.
        :type quality_checks: Object
        """

        self._quality_checks = quality_checks
